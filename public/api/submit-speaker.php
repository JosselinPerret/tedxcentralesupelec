<?php
// api/submit-speaker.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get the JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required = ['prenom', 'nom', 'email', 'poste', 'message'];
$errors = [];

foreach ($required as $field) {
    if (empty($data[$field])) {
        $errors[] = "Le champ '$field' est requis";
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => $errors]);
    exit();
}

// Sanitize inputs
$prenom = sanitize_input($data['prenom']);
$nom = sanitize_input($data['nom']);
$email = sanitize_input($data['email']);
$poste = sanitize_input($data['poste']);
$message = sanitize_input($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email invalide']);
    exit();
}

// Save to database or file
$formData = [
    'prenom' => $prenom,
    'nom' => $nom,
    'email' => $email,
    'poste' => $poste,
    'message' => $message,
    'date' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
];

// Option 1: Save to file (if you don't have a database)
$submissionsDir = __DIR__ . '/../submissions';
if (!is_dir($submissionsDir)) {
    mkdir($submissionsDir, 0755, true);
}

$filename = $submissionsDir . '/speaker_' . time() . '_' . bin2hex(random_bytes(4)) . '.json';
file_put_contents($filename, json_encode($formData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Option 2: Send email notification
$to = 'josselin.perret@student-cs.fr'; // Change this to your email
$subject = 'Nouvelle demande de speaker - ' . $prenom . ' ' . $nom;
$emailMessage = "
Nouvelle candidature speaker reçue:

Prénom: $prenom
Nom: $nom
Email: $email
Poste: $poste

Message:
$message

---
Reçu le: " . date('d/m/Y à H:i:s');

$headers = "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: noreply@example.com\r\n";

// Uncomment to send email
mail($to, $subject, $emailMessage, $headers);

// Return success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Votre candidature a été reçue avec succès!',
    'id' => basename($filename)
]);

function sanitize_input($input) {
    return htmlspecialchars(stripslashes(trim($input)), ENT_QUOTES, 'UTF-8');
}
?>

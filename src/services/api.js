// API service for form submissions
export const submitSpeakerForm = async (formData) => {
  try {
    const response = await fetch('/api/submit-speaker.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

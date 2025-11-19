import React, { useState } from 'react';
import Stepper, { Step } from '../components/Stepper';
import { submitSpeakerForm } from '../services/api';

const DevenirSpeaker = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    poste: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStepChange = (step) => {
    console.log(`Étape ${step} atteinte`);
  };

  const handleFinalStepCompleted = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await submitSpeakerForm(formData);
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Votre candidature a été envoyée avec succès!'
      });
      // Reset form
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        poste: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Une erreur est survenue lors de l\'envoi du formulaire'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 1124px) {
          .devenir-speaker-container {
            margin-top: 0 !important;
          }
        }
        @media (min-width: 1125px) {
          .devenir-speaker-container {
            margin-top: -4rem !important;
          }
        }
      `}</style>
      <div className="devenir-speaker-container" style={{ padding: 24, paddingBottom: 0 }}>
      
      {submitStatus && (
        <div style={{
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: '0.5rem',
          backgroundColor: submitStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: submitStatus.type === 'success' ? '#166534' : '#991b1b',
          border: `1px solid ${submitStatus.type === 'success' ? '#86efac' : '#fca5a5'}`
        }}>
          {submitStatus.message}
        </div>
      )}

      <Stepper
        initialStep={1}
        onStepChange={handleStepChange}
        onFinalStepCompleted={handleFinalStepCompleted}
        backButtonText="Précédent"
        nextButtonText="Suivant"
      >
        {/* Step 1: Welcome */}
        <Step>
          <h2>Devenir Speaker pour l'édition 2026</h2>
          <p>Bienvenue! Nous sommes heureux de votre intérêt pour devenir orateur.</p>
          <p style={{ marginTop: '1.5rem' }}>Remplissez ce formulaire en 4 étapes pour en savoir plus sur vous et votre présentation.</p>
        </Step>

        {/* Step 2: Basic Info */}
        <Step>
          <h2>Vos Informations</h2>
          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '1rem' }}>
              <span style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Prénom</span>
              <input
                type="text"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={(e) => handleInputChange('prenom', e.target.value)}
                style={{ marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              <span style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Nom</span>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                style={{ marginTop: '0.5rem' }}
              />
            </label>
          </div>
        </Step>

        {/* Step 3: Contact & Position */}
        <Step>
          <h2>Contact et Poste</h2>
          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '1rem' }}>
              <span style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Email</span>
              <input
                type="email"
                placeholder="votre.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{ marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              <span style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Poste / Titre</span>
              <input
                type="text"
                placeholder="Ex: Directeur, Ingénieur, Entrepreneur..."
                value={formData.poste}
                onChange={(e) => handleInputChange('poste', e.target.value)}
                style={{ marginTop: '0.5rem' }}
              />
            </label>
          </div>
        </Step>

        {/* Step 4: Message */}
        <Step>
          <h2>Votre Message</h2>
          <p style={{ marginBottom: '1rem' }}>Dites-nous pourquoi vous aimeriez être speaker et quel sujet vous souhaiteriez présenter.</p>
          <label style={{ display: 'block' }}>
            <textarea
              placeholder="Décrivez votre expérience et votre sujet de présentation..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.5rem',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                fontFamily: 'inherit',
                backgroundColor: '#141414',
                color: '#fff',
                minHeight: '120px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#dc2626';
                e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#374151';
                e.target.style.boxShadow = 'none';
              }}
            />
          </label>
        </Step>

        {/* Step 5: Confirmation */}
        <Step>
          <h2>Confirmation</h2>
          <div style={{ marginTop: '1.5rem' }}>
            <p><strong>Prénom:</strong> {formData.prenom || '-'}</p>
            <p><strong>Nom:</strong> {formData.nom || '-'}</p>
            <p><strong>Email:</strong> {formData.email || '-'}</p>
            <p><strong>Poste:</strong> {formData.poste || '-'}</p>
            <p><strong>Message:</strong></p>
            <p style={{ 
              backgroundColor: '#0f0f0f', 
              padding: '1rem', 
              borderRadius: '0.375rem',
              maxHeight: '100px',
              overflowY: 'auto'
            }}>
              {formData.message || '-'}
            </p>
          </div>
          <p style={{ marginTop: '1.5rem', color: '#ffffffff' }}>
            {isSubmitting ? 'Envoi en cours...' : 'Cliquez sur "Terminer" pour soumettre votre candidature'}
          </p>
        </Step>
      </Stepper>
      </div>
    </>
  );
};

export default DevenirSpeaker;



import React from 'react';

const Acheter = () => {
  const handleBilletterieClick = () => {
    window.open(
      'https://www.helloasso.com/associations/genius-centralesupelec/evenements/billetterie-tedxcs-2025-2026',
      '_blank'
    );
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>Réserve ta place !</h1>
      
      <div style={{
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        border: '2px solid #dc2626',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Billets disponibles sur <strong>HelloAsso</strong><br />
          Clique sur le bouton ci-dessous pour accéder à la billetterie
        </p>
        <button
          onClick={handleBilletterieClick}
          style={{
            display: 'inline-block',
            backgroundColor: '#dc2626',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            pointerEvents: 'auto'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c41e0f'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
        >
          🎫 Accéder à la billetterie
        </button>
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: 'rgba(124, 117, 117, 0.05)',
        border: '1px solid #eee0e0ff',
        borderRadius: '6px',
        color: '#fff'
      }}>
        <p style={{ marginTop: 0, fontSize: '0.95rem' }}>
          <strong>⏳ Attention :</strong> Les places sont limitées ! Réserve dès maintenant pour ne pas rater cet événement exceptionnel.
        </p>
      </div>
    </div>
  );
};

export default Acheter;



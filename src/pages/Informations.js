import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Informations = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', paddingTop: '4rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>L'Effet Tunnel 🔥</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.9, color: '#fff', marginBottom: '3rem', lineHeight: '1.6' }}>
        Franchir les limites impossibles
      </p>

      <div style={{
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        border: '2px solid #dc2626',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '3rem',
        color: '#fff'
      }}>
        <h2 style={{ marginTop: 0, color: '#dc2626' }}>Le Thème</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1rem' }}>
          Inspiré de la physique quantique, l'Effet Tunnel symbolise ces moments où l'on parvient à dépasser des barrières qui semblaient infranchissables. Une invitation à réfléchir à la manière dont l'improbable peut devenir possible...
        </p>
      </div>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        color: '#fff',
        borderLeft: '4px solid #dc2626'
      }}>
        <h2 style={{ marginTop: 0, color: '#fff' }}>📋 Infos clés</h2>
        <div style={{ fontSize: '1.05rem', lineHeight: '2', opacity: 0.95 }}>
          <p>📆 <strong>Date :</strong> Jeudi 27 novembre 2025</p>
          <p>🕖 <strong>Heure :</strong> 18h00</p>
          <p>📍 <strong>Lieu :</strong> Théâtre Rousseau (bâtiment Bouygues)</p>
          <p>⏳ <strong>Places :</strong> Limitées</p>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        color: '#fff'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Prêt à plonger au cœur de l'impossible ? 🖤❤️
        </p>
        <button
          onClick={() => navigate('/acheter')}
          style={{
            display: 'inline-block',
            backgroundColor: '#dc2626',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            pointerEvents: 'auto'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c41e0f'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
        >
          Réserver ta place →
        </button>
      </div>
    </div>
  );
};

export default Informations;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCards from '../components/PricingCards';
import './Tarifs.css';

const Tarifs = () => {
  const navigate = useNavigate();
  const [isExternal, setIsExternal] = useState(false);
  const isDesktop = window.innerWidth > 1124;

  const tiersData = {
    cs: [
      {
        name: 'Classique',
        price: '4€',
        interval: 'CentraleSupélec',
        description: 'Accès à l\'événement complet',
        features: [
          { name: 'Accès à tous les talks', included: true },
          { name: 'Buffet à l\'entracte', included: true },
          { name: 'Expérience VIP', included: false },
          { name: 'Rencontres speakers', included: false },
        ],
        cta: {
          text: 'Acheter (4€)',
          onClick: () => navigate('/acheter'),
        },
      },
      {
        name: 'VIP',
        price: '9€',
        interval: 'CentraleSupélec',
        description: 'Expérience premium',
        highlight: true,
        features: [
          { name: 'Accès à tous les talks', included: true },
          { name: 'Buffet exclusif avec speakers', included: true },
          { name: 'Buffet à l\'entracte', included: true },
          { name: 'Rencontres VIP', included: true, highlight: true },
        ],
        cta: {
          text: 'Acheter (9€)',
          onClick: () => navigate('/acheter'),
        },
      },
    ],
    external: [
      {
        name: 'Classique',
        price: '8€',
        interval: 'Externe',
        description: 'Accès à l\'événement complet',
        features: [
          { name: 'Accès à tous les talks', included: true },
          { name: 'Buffet à l\'entracte', included: true },
          { name: 'Expérience VIP', included: false },
          { name: 'Rencontres speakers', included: false },
        ],
        cta: {
          text: 'Acheter (8€)',
          onClick: () => navigate('/acheter'),
        },
      },
      {
        name: 'VIP',
        price: '15€',
        interval: 'Externe',
        description: 'Expérience premium',
        highlight: true,
        features: [
          { name: 'Accès à tous les talks', included: true },
          { name: 'Buffet exclusif avec speakers', included: true },
          { name: 'Buffet à l\'entracte', included: true },
          { name: 'Rencontres VIP', included: true, highlight: true },
        ],
        cta: {
          text: 'Acheter (15€)',
          onClick: () => navigate('/acheter'),
        },
      },
    ],
  };

  const currentTiers = isExternal ? tiersData.external : tiersData.cs;

  return (
    <div style={{ marginTop: isDesktop ? '-8rem' : '0rem' }}>
      <div style={{ padding: '2rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '900px', textAlign: 'center', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Tarifs</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, color: '#fff', marginBottom: '1.5rem' }}>
          Billetterie TEDx 2025 - Réserve ta place dès maintenant !
        </p>

        <div className="toggle-container">
          <button
            className={`toggle-button ${!isExternal ? 'toggle-button--active' : ''}`}
            onClick={() => setIsExternal(false)}
          >
            🎓 CentraleSupélec
          </button>
          <button
            className={`toggle-button ${isExternal ? 'toggle-button--active' : ''}`}
            onClick={() => setIsExternal(true)}
          >
            🌍 Externe
          </button>
        </div>
      </div>
      <PricingCards tiers={currentTiers} />
    </div>
  );
};

export default Tarifs;



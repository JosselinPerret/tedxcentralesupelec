import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useNavigate } from 'react-router-dom';
import './Tarifs.css';

const Tarifs = () => {
  const navigate = useNavigate();

  return (
    <div className="tarifs-page">
      <h1 className="tarifs-title">Tarifs</h1>
      <div className="tarifs-grid">
        <ProfileCard
          name="Classique"
          title="Exte : 8 € / CS : 4 €"
          handle="Classique"
          status="Places disponibles"
          contactText="Acheter"
          showUserInfo={true}
          enableTilt={false}
          enableMobileTilt={false}
          onContactClick={() => navigate('/acheter')}
        />
        <div className="tarif-card-wrapper">
          <div className="tarif-badge">
            Recommandé
          </div>
          <div className="tarif-card-inner">
            <ProfileCard
              name="VIP"
              title="Exte : 15 € / CS : 8 €"
              handle="VIP"
              status="Places disponibles"
              contactText="Acheter"
              showUserInfo={true}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => navigate('/acheter')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;



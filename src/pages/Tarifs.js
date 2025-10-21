import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useNavigate } from 'react-router-dom';

const Tarifs = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: 24 }}>Tarifs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: '800px', width: '100%', justifyItems: 'center' }}>
        <ProfileCard
          name="Classique"
          title="Exte : 8 € / CS : 4 €"
          handle="Classique"
          status="Places disponibles"
          contactText="Acheter"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => navigate('/acheter')}
        />
        <ProfileCard
          name="VIP"
          title="Exte : 15 € / CS : 8 €"
          handle="VIP"
          status="Places disponibles"
          contactText="Acheter"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => navigate('/acheter')}
        />
      </div>
    </div>
  );
};

export default Tarifs;



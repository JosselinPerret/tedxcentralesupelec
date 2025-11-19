import React from 'react';

const Planning = () => {
  const isDesktop = window.innerWidth > 1124;

  return (
    <div style={{ padding: 24, marginTop: isDesktop ? -48 : 0 }}>
      <h1>Planning</h1>
      <p>Contenu à venir.</p>
    </div>
  );
};

export default Planning;



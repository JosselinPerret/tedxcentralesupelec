import React from 'react';
import GradientBlinds from './components/GradientBlinds';
import CardNav from './components/CardNav';
import tedxLogo from './tedx-logo-white.png';
import './App.css';

function App() {
  const navItems = [
    {
      label: "Speakers",
      bgColor: "rgba(230, 43, 30, 0.9)",
      textColor: "#fff",
      links: [
        { label: "Conférenciers", ariaLabel: "Nos conférenciers" },
        { label: "Biographies", ariaLabel: "Biographies des speakers" }
      ]
    },
    {
      label: "Programme", 
      bgColor: "rgba(196, 30, 58, 0.9)",
      textColor: "#fff",
      links: [
        { label: "Planning", ariaLabel: "Planning de l'événement" },
        { label: "Sessions", ariaLabel: "Sessions détaillées" }
      ]
    },
    {
      label: "Billetterie",
      bgColor: "rgba(179, 77, 77, 0.9)", 
      textColor: "#fff",
      links: [
        { label: "Acheter", ariaLabel: "Acheter des billets" },
        { label: "Tarifs", ariaLabel: "Tarifs des billets" }
      ]
    }
  ];

  return (
    <div className="app">
      <CardNav
        logo={tedxLogo}
        logoAlt="TEDx Centralesupelec Logo"
        items={navItems}
        baseColor="rgba(0, 0, 0, 0.8)"
        menuColor="#fff"
        buttonBgColor="#e62b1e"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      <div className="background-container">
        <GradientBlinds
          gradientColors={['#b34d4d', '#db0a0a']}
          angle={20}
          noise={0.5}
          blindCount={12}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.3}
          distortAmount={5}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      
      <div className="app-content">
        <header className="app-header">
          <h1 className="tedx-title">
            <span className="tedx-red">TED</span>
            <span className="tedx-x">x</span>
            <span className="tedx-university">CentraleSupélec</span>
          </h1>
          <p className="tagline">L'effet tunnel</p>
        </header>
        
        <main className="app-main">
          <section className="hero-section">
            <h2 className="hero-title">Bienvenue sur le site de TEDx Centralesupelec</h2>
            <p className="hero-description">
              Rejoignez-nous pour un jour inspirant de conférences, d'idées et d'innovation. 
              Découvrez le pouvoir des idées qui peuvent changer le monde.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Les speakers</button>
              <button className="btn btn-secondary">Billetterie</button>
            </div>
          </section>
          
        </main>
        
        <footer className="app-footer">
          <p>&copy; 2025 TEDx Centralesupelec. Cet événement TEDx indépendant est opéré sous licence de TED.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

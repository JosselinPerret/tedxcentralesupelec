import React from 'react';
import GradientBlinds from './components/GradientBlinds';
import CardNav from './components/CardNav';
import { Routes, Route, useLocation } from 'react-router-dom';
import Conferenciers from './pages/Conferenciers';
import DevenirSpeaker from './pages/DevenirSpeaker';
import Planning from './pages/Planning';
import Informations from './pages/Informations';
import Acheter from './pages/Acheter';
import Tarifs from './pages/Tarifs';
import tedxLogo from './tedx-logo-white.png';
import './App.css';

function App() {
  const location = useLocation();
  const navItems = [
    {
      label: "Speakers",
      bgColor: "rgba(230, 43, 30, 0.9)",
      textColor: "#fff",
      links: [
        { label: "Conférenciers", ariaLabel: "Nos conférenciers", href: "/conferenciers" },
        { label: "Devenir speaker", ariaLabel: "Devenir speaker", href: "/devenir-speaker" }
      ]
    },
    {
      label: "Programme", 
      bgColor: "rgba(196, 30, 58, 0.9)",
      textColor: "#fff",
      links: [
        { label: "Planning", ariaLabel: "Planning de l'événement", href: "/planning" },
        { label: "Informations", ariaLabel: "Informations sur l'événement", href: "/informations" }
      ]
    },
    {
      label: "Billetterie",
      bgColor: "rgba(179, 77, 77, 0.9)", 
      textColor: "#fff",
      links: [
        { label: "Acheter", ariaLabel: "Acheter des billets", href: "/acheter" },
        { label: "Tarifs", ariaLabel: "Tarifs des billets", href: "/tarifs" }
      ]
    }
  ];

  const isHome = location.pathname === '/';
  const hasBlackBackground = !isHome;

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
      {!hasBlackBackground ? (
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
      ) : (
        <div className="background-black" />
      )}
      
      <div className="app-content">
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={(
                <section className="hero-section">
                  <h2 className="hero-title">Bienvenue sur le site de TEDx Centralesupelec</h2>
                  <p className="hero-description">
                    Rejoignez-nous pour un jour inspirant de conférences, d'idées et d'innovation. 
                    Découvrez le pouvoir des idées qui peuvent changer le monde.
                  </p>
                  <div className="cta-buttons">
                    <a className="btn btn-primary" href="/conferenciers">Speakers</a>
                    <a className="btn btn-secondary" href="/acheter">Billetterie</a>
                  </div>
                </section>
              )}
            />
            <Route path="/conferenciers" element={<Conferenciers />} />
            <Route path="/devenir-speaker" element={<DevenirSpeaker />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/acheter" element={<Acheter />} />
            <Route path="/tarifs" element={<Tarifs />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 TEDx Centralesupelec. Cet événement TEDx indépendant est opéré sous licence de TED.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

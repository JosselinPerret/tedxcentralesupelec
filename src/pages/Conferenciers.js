import React from 'react';
import ChromaGrid from '../components/ChromaGrid';
import "./Conferenciers.css";

const Conferenciers = () => {
  const speakers = [
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(145deg, #E62B1E, #000)",
      url: "#"
    },
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(180deg, #E62B1E, #000)",
      url: "#"
    },
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(195deg, #E62B1E, #000)",
      url: "#"
    },
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(225deg, #E62B1E, #000)",
      url: "#"
    },
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(135deg, #E62B1E, #000)",
      url: "#"
    },
    {
      image: "/profile_pic.png",
      title: "À venir...",
      subtitle: "Intervenant TEDx",
      borderColor: "#E62B1E",
      gradient: "linear-gradient(155deg, #E62B1E, #000)",
      url: "#"
    }
  ];

  return (
    <div className="conferenciers-page">
      <h1 className="conferenciers-title">Conférenciers</h1>
      <div className="conferenciers-grid-container">
        <ChromaGrid 
          items={speakers}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default Conferenciers;



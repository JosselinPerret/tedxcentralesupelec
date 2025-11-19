import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, baseOpacity = 0, enableBlur = true, blurStrength = 10 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Récupère tous les mots
    const words = container.querySelectorAll('.reveal-word');
    
    if (words.length === 0) return;

    // Kill toutes les animations précédentes
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Animation du texte avec scroll
    gsap.fromTo(
      words,
      {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
        rotateY: 10,
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        rotateY: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1.5,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children, baseOpacity, enableBlur, blurStrength]);

  // Divise le texte en mots et les enveloppe dans des spans
  const renderText = () => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');
    
    return words.map((word, index) => (
      <span 
        key={index} 
        className="reveal-word" 
        style={{ 
          display: 'inline-block', 
          marginRight: '0.3em',
          color: '#ffffff'
        }}
      >
        {word}
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef} 
      style={{ 
        fontSize: '2.2rem',
        fontWeight: '500',
        lineHeight: '1.8',
        color: '#ffffff',
        textAlign: 'justify'
      }}
    >
      {renderText()}
    </div>
  );
};

export default ScrollReveal;

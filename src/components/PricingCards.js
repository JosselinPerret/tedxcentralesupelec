import React from 'react';
import './PricingCards.css';

export function PricingCards({ tiers }) {
  const handleBuyClick = (callback) => {
    console.log('Buy button clicked');
    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div
              key={`${tier.name}-${index}`}
              className={`pricing-card ${tier.highlight ? 'pricing-card--highlight' : ''}`}
            >
              <div className="pricing-card-content">
                <div className="pricing-header">
                  <h3 className="pricing-name">{tier.name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-amount">{tier.price}</span>
                    <span className="pricing-interval">{tier.interval || 'one-time'}</span>
                  </div>
                  <p className="pricing-description">{tier.description}</p>
                </div>

                <div className="pricing-features">
                  {tier.features.map((feature) => (
                    <div
                      key={feature.name}
                      className={`pricing-feature ${feature.included ? 'pricing-feature--included' : 'pricing-feature--excluded'}`}
                    >
                      <svg
                        className="pricing-feature-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="pricing-feature-name">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {tier.cta && (
                  <div className="pricing-cta">
                    <button
                      className={`pricing-button ${tier.highlight ? 'pricing-button--highlight' : ''}`}
                      onClick={() => handleBuyClick(tier.cta.onClick)}
                      type="button"
                      style={{ pointerEvents: 'auto' }}
                    >
                      Acheter
                      <svg
                        className="pricing-button-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCards;

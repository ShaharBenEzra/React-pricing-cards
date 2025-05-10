import React from 'react';
import './PricingCard.css';

function PricingCard({ title, price, features }) {
  return (
    <div className="pricing-card">
    <div className="card-header">
        <h2>{title}</h2>
        <div className="price-circle">
        <span>{price}</span>
        </div>
    </div>
    <div className="card-body">
        <button className="signup-button">SIGN UP</button>
        <ul>
        {features.map((item, i) => (
            <li key={i}>
            <span className="bold">{item.value}</span> {item.label}
            </li>
        ))}
        </ul>
    </div>
    </div>

  );
}

export default PricingCard;

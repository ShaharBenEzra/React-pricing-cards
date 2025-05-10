import PricingCard from './PricingCard';
import './App.css';

function App() {
  const cards = [
    {
      title: "Enterprise",
      price: "$59",
      features: [
        { value: "10GB", label: "Disk Space" },
        { value: "100GB", label: "Monthly Bandwidth" },
        { value: "20", label: "Email Accounts" },
        { value: "Unlimited", label: "subdomains" }
      ]
    },
    {
      title: "Professional",
      price: "$29",
      features: [
        { value: "5GB", label: "Disk Space" },
        { value: "50GB", label: "Monthly Bandwidth" },
        { value: "10", label: "Email Accounts" },
        { value: "Unlimited", label: "subdomains" }
      ]
    },
    {
      title: "Standard",
      price: "$17",
      features: [
        { value: "3GB", label: "Disk Space" },
        { value: "25GB", label: "Monthly Bandwidth" },
        { value: "5", label: "Email Accounts" },
        { value: "Unlimited", label: "subdomains" }
      ]
    },
    {
      title: "Basic",
      price: "$9",
      features: [
        { value: "1GB", label: "Disk Space" },
        { value: "10GB", label: "Monthly Bandwidth" },
        { value: "2", label: "Email Accounts" },
        { value: "Unlimited", label: "subdomains" }
      ]
    }
  ];

  return (
    <div className="app">
      <div className="card-container">
        {cards.map((card, i) => (
          <PricingCard
            key={i}
            title={card.title}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

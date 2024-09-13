// src/App.tsx
import Banner from "./components/Banner";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import FeatureSkew from "./components/feature_skew";
import FeatureSafe from "./components/Feature_safe";
import Client from "./components/client";
import Contact from "./components/contact";

function App() {
  // Define the pricing plans and their features
  const pricingPlans = [
    {
      planName: "STARTUP",
      price: 0,
      features: [
        "Up to 5 Documents",
        "Up to 3 Reviews",
        "5 Team Members",
        "Limited Support",
      ],
    },
    {
      planName: "PREMIUM",
      price: 10,
      features: [
        "Up to 15 Documents",
        "Up to 10 Reviews",
        "25 Team Members",
        "Priority Support",
      ],
    },
    {
      planName: "PROFESSIONAL",
      price: 30,
      features: [
        "Unlimited Documents",
        "Unlimited Reviews",
        "Unlimited Members",
        "Premium Support",
      ],
    },
  ];

  return (
    <div>
      <Banner
        title="A New Way To Start Business"
        description="Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo."
        buttonText="Get Started"
      />
      <FeaturesSection />
      <FeatureSkew />
      <FeatureSafe />

      {/* Pass the pricing plans as props to PricingSection */}
      <PricingSection plans={pricingPlans} />
      <Client />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;

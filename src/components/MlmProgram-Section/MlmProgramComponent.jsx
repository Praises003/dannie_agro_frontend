import React, { useEffect } from 'react';
import { FiUserPlus, FiShare2, FiDollarSign } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    icon: <FiUserPlus size={32} />,
    title: '1. Sign Up',
    description:
      'Register with your details and get your unique referral code to start building your network.',
    delay: 0,
  },
  {
    icon: <FiShare2 size={32} />,
    title: '2. Refer Others',
    description:
      'Share your referral code with friends and family to grow your network and earn points.',
    delay: 100,
  },
  {
    icon: <FiDollarSign size={32} />,
    title: '3. Earn Commissions',
    description:
      'Earn ₦500 for every point from your personal sales and your network\'s sales.',
    delay: 200,
  },
];

const MlmProgramComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-primary text-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Earn With Our MLM Program</h2>
          <p className="text-lg opacity-90">
            Join our network marketing program and earn ₦500 for every point you accumulate
            through product sales and referrals.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="mlm-card p-6 rounded-lg shadow-md text-dark bg-white"
              data-aos="zoom-in"
              data-aos-delay={step.delay}
            >
              <div className="text-secondary mb-4">{step.icon}</div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary text-dark font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition">
            Join MLM Program Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MlmProgramComponent;

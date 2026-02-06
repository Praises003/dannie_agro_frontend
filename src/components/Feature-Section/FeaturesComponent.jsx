// FeaturesComponent.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import { FiShield, FiUsers, FiGlobe } from 'react-icons/fi';

const FeaturesComponent = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const features = [
    {
      icon: <FiShield className="text-primary" size={24} />,
      title: 'Accountability',
      description: 'We take responsibility for our actions and products.',
      color: 'primary',
      delay: '0',
    },
    {
      icon: <FiUsers className="text-secondary" size={24} />,
      title: 'Integrity',
      description: ' We operate with honesty, ethics, and morality.',
      color: 'secondary',
      delay: '100',
    },
    {
      icon: <FiGlobe className="text-primary" size={24} />,
      title: 'Transparency',
      description: 'We maintain openness in our business practices.',
      color: 'primary',
      delay: '200',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className={`bg-${feature.color}  bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;

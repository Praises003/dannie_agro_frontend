import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CtaComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-secondary text-dark" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of Nigerians who are buying quality products, eating healthy, and making money with Dannie Agricultural.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition">
            Shop Products
          </button>
          <button className="bg-white text-dark font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition">
            Join MLM Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaComponent;

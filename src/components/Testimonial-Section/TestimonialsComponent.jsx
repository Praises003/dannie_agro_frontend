import React, { useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Single testimonial card component
const TestimonialCard = ({ image, name, rating, text, delay }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-md"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-bold">{name}</h4>
        <div className="flex text-secondary">
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <FaStar key={i} className="text-secondary" />
            ) : (
              <FaRegStar key={i} className="text-secondary" />
            )
          )}
        </div>
      </div>
    </div>
    <p className="text-gray-600">"{text}"</p>
  </div>
);

// Main Testimonials section
const TestimonialsComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      image: 'http://static.photos/people/200x200/1',
      name: 'Adebayo Johnson',
      rating: 5,
      text: "The quality of Dannie's agricultural products is unmatched. I've been able to build a steady income through their MLM program while feeding my family with healthy food.",
      delay: 0,
    },
    {
      image: 'http://static.photos/people/200x200/2',
      name: 'Chioma Eze',
      rating: 4,
      text: 'I started with just buying products for my family, but the MLM opportunity has changed my life. Last month I earned ₦150,000 from my network!',
      delay: 100,
    },
    {
      image: 'http://static.photos/people/200x200/3',
      name: 'Oluwaseun Adeleke',
      rating: 5,
      text: "The poultry feeds have improved my chicken's health and egg production. Plus, the business opportunity is a bonus I didn't expect when I first became a customer.",
      delay: 200,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;

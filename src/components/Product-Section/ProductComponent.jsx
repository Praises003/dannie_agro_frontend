import React, { useEffect } from 'react';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from './ProductCard';



// Main Products section component
const ProductsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      image: 'http://static.photos/food/640x360/1',
      title: 'Premium Rice',
      description: 'High quality locally grown rice',
      price: '₦15,000',
    },
    {
      image: 'http://static.photos/food/640x360/2',
      title: 'Organic Beans',
      description: 'Naturally grown without chemicals',
      price: '₦12,500',
    },
    {
      image: 'http://static.photos/food/640x360/3',
      title: 'Farm Equipment',
      description: 'Quality tools for modern farming',
      price: '₦45,000',
    },
    {
      image: 'http://static.photos/food/640x360/4',
      title: 'Poultry Feed',
      description: 'Nutritious feed for healthy birds',
      price: '₦8,500',
    },
  ];

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Products</h2>
          <a href="#" className="text-secondary font-medium flex items-center">
            View All <FiArrowRight className="ml-2" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
// Reusable product card component
const ProductCard = ({ image, title, description, price, animationDelay }) => (
    
  <div
    className="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
    data-aos="fade-up"
    data-aos-delay={animationDelay}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-primary">{price}</span>
        <button className="bg-secondary text-white p-2 rounded-full hover:bg-opacity-90">
          <FiShoppingCart size={16} />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard
import React from "react"
import { useCart } from "../../context/CartContext"

const ProductCard = ({ product }) => {

  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border">

      <img  
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-green-600 font-bold">
          ₦{product.price}
        </p>

        <button
          onClick={() => addToCart(product.id)}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>

      </div>
    </div>
  )
}

export default ProductCard
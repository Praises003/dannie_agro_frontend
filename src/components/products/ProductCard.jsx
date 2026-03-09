import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">

        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-xl font-bold text-green-600">
          ₦{product.price}
        </p>

        <p className="text-sm text-gray-500">
          Earn <span className="font-medium text-blue-600">{product.points}</span> points
        </p>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>

      </div>
    </div>
  )
}

export default ProductCard
const CartSummary = ({ items }) => {

  const total = items.reduce((sum, item) => {
    return sum + item.Product.price * item.quantity
  }, 0)

  return (
    <div className="mt-10 border p-6 rounded-lg shadow-sm">

      <h2 className="text-xl font-semibold mb-4">
        Order Summary
      </h2>

      <div className="flex justify-between mb-4">
        <span>Total</span>
        <span className="font-bold">₦{total}</span>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
        Proceed to Checkout
      </button>

    </div>
  )
}

export default CartSummary
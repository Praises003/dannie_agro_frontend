const CartItem = ({ item, onRemove }) => {

  const product = item.Product

  return (
    <div className="flex items-center justify-between border-b py-4">

      <div className="flex items-center gap-4">

        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />

        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-500">₦{product.price}</p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <span>Qty: {item.quantity}</span>

        <span className="font-semibold">
          ₦{product.price * item.quantity}
        </span>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default CartItem
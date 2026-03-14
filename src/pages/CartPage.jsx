import { useEffect, useState } from "react"
import { getCart, removeItem } from "./../services/cartApi"

import CartItem from "../components/cart/CartItem"
import CartSummary from "../components/cart/CartSummary"

const CartPage = () => {

  const [cart, setCart] = useState(null)

  const fetchCart = async () => {

    const data = await getCart()
    setCart(data)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const handleRemove = async (id) => {

    await removeItem(id)
    fetchCart()
  }

  if (!cart) {
    return <p className="text-center py-20">Loading...</p>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="md:col-span-2">

          {cart.CartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
            />
          ))}

        </div>

        <CartSummary items={cart.CartItems} />

      </div>

    </div>
  )
}

export default CartPage
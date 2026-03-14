import { createContext, useContext, useState, useEffect } from "react"
import { getCart, addToCart } from "./../services/cartApi"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(null)

  const fetchCart = async () => {
    const data = await getCart()
    setCart(data)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const handleAddToCart = async (productId) => {
    await addToCart(productId, 1)
    fetchCart()
  }

  const cartCount =
    cart?.CartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart: handleAddToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
import axios from "axios"

const API = axios.create({
  baseURL: "http://dannie-agro.onrender.com/api",
  withCredentials: true
})

export const getCart = async () => {
  const res = await API.get("/cart")
  return res.data
}

export const addToCart = async (productId, quantity = 1) => {
  const res = await API.post("/cart/add", {
    productId,
    quantity
  })
  return res.data
}

export const removeItem = async (id) => {
  const res = await API.delete(`/cart/item/${id}`)
  return res.data
}
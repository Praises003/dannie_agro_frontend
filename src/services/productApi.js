import axios from "axios"

const API = axios.create({
  baseURL: "https://dannie-agro.onrender.com/api"
})

export const getProducts = async (params) => {
  const res = await API.get("/products", { params })
  return res.data
}
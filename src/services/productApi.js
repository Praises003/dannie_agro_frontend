import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:25491/api/"
})

export const getProducts = async (params) => {
  const res = await API.get("/products", { params })
  return res.data
}
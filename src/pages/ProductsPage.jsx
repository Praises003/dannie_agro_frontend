import React, { useEffect, useState } from "react"
import { getProducts } from "../services/productApi"

import ProductGrid from "../components/products/ProductGrid"
import ProductSearch from "../components/products/ProductSearch"
import Pagination from "../components/products/Pagination"

const ProductsPage = () => {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState("")

  const fetchProducts = async () => {

    try {

      const data = await getProducts({
        page,
        search
      })

      setProducts(data.products)
      setTotalPages(data.totalPages)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [page, search])

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Products
        </h1>

        <ProductSearch
          search={search}
          setSearch={setSearch}
        />

      </div>

      <ProductGrid products={products} />

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

    </div>
  )
}

export default ProductsPage
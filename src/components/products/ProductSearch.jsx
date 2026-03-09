import React from "react"

const ProductSearch = ({ search, setSearch }) => {

  return (
    <div className="mb-6">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

    </div>
  )
}

export default ProductSearch
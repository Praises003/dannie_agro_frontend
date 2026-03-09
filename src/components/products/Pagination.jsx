import React from "react"

const Pagination = ({ page, totalPages, setPage }) => {

  return (
    <div className="flex items-center justify-center gap-4 mt-10">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
      >
        Prev
      </button>

   

      <span className="font-medium text-gray-700">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
      >
        Next
      </button>

    </div>
  )
}

export default Pagination
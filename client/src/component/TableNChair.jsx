import FilteredProducts from "./helper/FilteredProducts"

function TableNChair() {
  return (
    <div className="container">
    <h2>Table and Chair Products</h2>
    <FilteredProducts category="Table" />
    <FilteredProducts category="Chair" />
    </div>
  )
}

export default TableNChair
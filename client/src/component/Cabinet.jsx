import FilteredProducts from "./helper/FilteredProducts"

function Cabinet() {
  return (
    <div className="container">
    <h2>Cabinet Products</h2>
    <FilteredProducts category="Cabinet" />
    </div>
  )
}

export default Cabinet
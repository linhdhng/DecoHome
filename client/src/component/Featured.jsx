import FilteredProducts from "./helper/FilteredProducts"

function Featured() {
  return (
    <div className="container">
    <h2>Cabinet Products</h2>
    <FilteredProducts category="Cabinet" />
    <h2>Chair Products</h2>
    <FilteredProducts category="Chair" />
  </div>
  )
}

export default Featured
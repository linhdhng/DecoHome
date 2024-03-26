import FilteredProducts from "./helper/FilteredProducts"

function KitchenNBath() {
  return (
    <div className="container">
    <h2>Kitchen and Bath Products</h2>
    <FilteredProducts category="Kitchen" />
    <FilteredProducts category="Bath" />
  </div>
  )
}

export default KitchenNBath
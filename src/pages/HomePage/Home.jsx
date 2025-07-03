import { useSelector, useDispatch } from 'react-redux'
import { selectProducts, toggleCart } from '../../redux/slices/productsSlice'
import {
  selectSearchQuery,
  selectSelectedCategory,
  selectSortBy,
  setClearAllFilters,
  setSearchQuery,
  setSelectedCategory,
  setSortBy,
} from '../../redux/slices/filterSlice'

function Home() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const sortBy = useSelector(selectSortBy)
  const searchQuery = useSelector(selectSearchQuery)
  const selectedCategory = useSelector(selectSelectedCategory)

  const sortedAndFilteredProducts = [...products]
    .filter((product) => {
      if (selectedCategory === 'All') return true
      return product.category === selectedCategory
    })
    .filter((product) => {
      const query = searchQuery.toLowerCase()
      const nameMatch = product.name.toLowerCase().includes(query)
      const priceMatch = product.price.toString().includes(query)
      return nameMatch || priceMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price
      if (sortBy === 'price_desc') return b.price - a.price
      if (sortBy === 'alphabetical') return a.name.localeCompare(b.name)
      return 0
    })

  const handleAddCart = (id) => {
    dispatch(toggleCart(id))
  }
  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value))
  }
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value))
  }
  const handleCategoryFilterChange = (e) => {
    dispatch(setSelectedCategory(e.target.value))
  }
  const handleClearAllFilters = () => {
    dispatch(setClearAllFilters())
  }

  return (
    <div className="home">
      <h1 className="title">Home</h1>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by name or price..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="filters-row">
        <div className="category-wrapper">
          <label htmlFor="category-select" className="category-label">
            Filter by category:
          </label>
          <select
            id="category-select"
            className="category-select"
            value={selectedCategory}
            onChange={handleCategoryFilterChange}
          >
            <option value="All">All</option>
            <option value="Clothes">Clothes</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            <option value="Outerwear">Outerwear</option>
          </select>
        </div>
        <div className="sort-wrapper">
          <label htmlFor="sort-select" className="sort-label">
            Sort by:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            onChange={handleSortChange}
            value={sortBy}
          >
            <option value="default">Default</option>
            <option value="price_asc">Price ↑</option>
            <option value="price_desc">Price ↓</option>
            <option value="alphabetical">A-Z</option>
          </select>
        </div>
        <div className="filters-reset-wrapper">
          <button className="reset-filters-btn" onClick={handleClearAllFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      <div className="product-list-wrapper">
        <div className="product-list">
          {sortedAndFilteredProducts.map((product) => (
            <div className="product-card-container" key={product.id}>
              <div className="product-card">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price} $</p>
                <button
                  className={`add-btn ${
                    product.isAddedToCart ? 'disabled' : ''
                  }`}
                  onClick={() => handleAddCart(product.id)}
                  disabled={product.isAddedToCart}
                >
                  {product.isAddedToCart ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

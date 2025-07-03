import { useSelector, useDispatch } from 'react-redux'
import { selectProducts, toggleCart } from '../../redux/slices/productsSlice'
import { selectSearchQuery, selectSortBy, setSortBy } from '../../redux/slices/filterSlice'

function Home() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const sortBy = useSelector(selectSortBy)

  const sortedProducts = [...products].sort((a, b) => {
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

  
  return (
    <div className="home">
      <h1 className="title">Home</h1>
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
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} $</p>
            <button
              className={`add-btn ${product.isAddedToCart ? 'disabled' : ''}`}
              onClick={() => handleAddCart(product.id)}
              disabled={product.isAddedToCart}
            >
              {product.isAddedToCart ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

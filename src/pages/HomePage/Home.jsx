import { useSelector, useDispatch } from 'react-redux'
import { selectProducts, toggleCart } from '../../redux/slices/productsSlice'


function Home() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  const handleAddCart = (id) => {
    dispatch(toggleCart(id))
  }

  return (
    <div className="home">
      <h1 className="title">Home</h1>
      <div className="product-list">
        {products.map((product) => (
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

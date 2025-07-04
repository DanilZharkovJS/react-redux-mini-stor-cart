import { useSelector } from 'react-redux'
import { selectProducts } from '../../redux/slices/productsSlice'

function ProductModal({ productId, onClose, handleCart }) {
  const products = useSelector(selectProducts)
  const product = products.find((p) => p.id === productId)

  if (!product) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{product.name}</h2>
        <p className="modal-category">{product.category}</p>
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">{product.price} $</p>
        <div className="modal-buttons">
          <button
            className={`add-btn ${product.isAddedToCart ? 'disabled' : ''}`}
            onClick={() => handleCart(product.id)}
            disabled={product.isAddedToCart}
          >
            {product.isAddedToCart ? 'In Cart' : 'Add to Cart'}
          </button>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductModal

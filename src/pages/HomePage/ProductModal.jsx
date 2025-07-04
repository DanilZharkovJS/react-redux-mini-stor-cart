function ProductModal({ product, onClose }) {
  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{product.name}</h2>
        <p className="modal-category">{product.category}</p>
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">{product.price} $</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  )
}
export default ProductModal

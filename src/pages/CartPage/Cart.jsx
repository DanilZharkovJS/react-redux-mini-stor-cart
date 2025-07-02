import { useSelector, useDispatch } from 'react-redux'
import {
  selectProducts,
  toggleCart,
  deleteAllCart,
} from '../../redux/slices/productsSlice'


function Cart() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  const filteredProducts = products.filter((product) => product.isAddedToCart)
  const totalPrice = filteredProducts.reduce((sum, p) => sum + p.price, 0)

  const handleDeleteCart = (id) => {
    dispatch(toggleCart(id))
  }

  const handleDelAll = () => {
    dispatch(deleteAllCart())
  }

  return (
    <div className="cart">
      <h1 className="title">Cart</h1>
      {filteredProducts.length > 0 ? (
        <>
          <button onClick={handleDelAll} className="del-all-btn">
            Delete All
          </button>
          <div className="cart-list">
            {filteredProducts.map((product) => (
              <div className="cart-item" key={product.id}>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price} $</p>
                <button
                  onClick={() => handleDeleteCart(product.id)}
                  className="remove-btn"
                >
                  Delete from Cart
                </button>
              </div>
            ))}
          </div>
          <h2 className="total">Total: {totalPrice} $</h2>
        </>
      ) : (
        <p className="empty-msg">Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart

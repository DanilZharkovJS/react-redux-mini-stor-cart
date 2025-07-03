import { useSelector, useDispatch } from 'react-redux'
import {
  selectProducts,
  toggleCart,
  deleteAllCart,
} from '../../redux/slices/productsSlice'
import { useEffect, useRef } from 'react'
import {
  selectError,
  setClearError,
  setError,
} from '../../redux/slices/errorsSlice'
import { toast } from 'react-toastify'

function Cart() {
  const dispatch = useDispatch()
  const toastId = useRef(null)
  const timeoutRef = useRef(null)
  const products = useSelector(selectProducts)
  const message = useSelector(selectError)

  const filteredProducts = products.filter((product) => product.isAddedToCart)
  const totalPrice = filteredProducts.reduce((sum, p) => sum + p.price, 0)

  const handleDeleteCart = (id) => {
    dispatch(toggleCart(id))
  }

  const handleDelAll = () => {
    dispatch(deleteAllCart())
  }
  const handlePayAll = () => {
    dispatch(setError('Processing..'))

    setTimeout(() => {
      dispatch(setError('Done!'))
      dispatch(setClearError())
      setTimeout(() => {
        dispatch(deleteAllCart())
      }, 1000)
    }, 4000)
  }
  useEffect(() => {
    if (message === 'Processing..') {
      toastId.current = toast.loading(message, {
        hideProgressBar: true,
      })

      timeoutRef.current = setTimeout(() => {
        toast.update(toastId.current, {
          render: 'Done!',
          type: 'success',
          hideProgressBar: true,
          isLoading: false,
          autoClose: 2000,
        })
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutRef.current)
      if (toastId.current) {
        toast.dismiss(toastId.current)
        toastId.current = null
      }
    }
  }, [message])

  return (
    <div className="cart">
      <h1 className="title">Cart</h1>
      {filteredProducts.length > 0 ? (
        <>
          <div className="cart-controls">
            <button onClick={handleDelAll} className="del-all-btn">
              Delete All
            </button>
            <button onClick={handlePayAll} className="pay-btn">
              Pay
            </button>
          </div>
          <div className="cart-list-wrapper">
            <ul className="cart-list">
              {filteredProducts.map((product) => (
                <li className="cart-item" key={product.id}>
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price} $</p>
                  </div>
                  <div className="remove-btn-wrapper">
                    <button
                      onClick={() => handleDeleteCart(product.id)}
                      className="remove-btn"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="total-wrapper">
            <h2 className="total">Total: {totalPrice} $</h2>
          </div>
        </>
      ) : (
        <div className="empty-msg-wrapper">
          <p className="empty-msg">Your cart is empty.</p>
        </div>
      )}
    </div>
  )
}

export default Cart

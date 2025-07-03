import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function CartSaver() {
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  return null
}

export default CartSaver

import { v4 as uuid } from 'uuid'
export const initialProducts = [
  {
    id: uuid(),
    name: 'T-Shirt',
    price: 25,
    isAddedToCart: false,
  },
  {
    id: uuid(),
    name: 'Sneakers',
    price: 90,
    isAddedToCart: false,
  },
  {
    id: uuid(),
    name: 'Backpack',
    price: 55,
    isAddedToCart: false,
  },
  {
    id: uuid(),
    name: 'Cap',
    price: 15,
    isAddedToCart: false,
  },
  {
    id: uuid(),
    name: 'Sunglasses',
    price: 35,
    isAddedToCart: false,
  },
]

export default initialProducts

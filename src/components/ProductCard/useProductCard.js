import AppContext from 'contexts/AppContext'
import { useContext } from 'react'

const useProductCard = (data) => {
  const { cartItems, setCartItems, setIsCartVisible } = useContext(AppContext)

  const handleAddCart = () => {
    const productAddedToCart = cartItems.some((item) => item === data)

    if (!productAddedToCart) {
      setCartItems([...cartItems, data])
      setIsCartVisible(true)
    }
  }

  return { handleAddCart }
}

export default useProductCard

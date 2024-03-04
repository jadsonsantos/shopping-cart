import { useContext } from 'react'

import AppContext from 'contexts/AppContext'

const useProductCard = (data) => {
  const { cartItems, setCartItems, setIsCartVisible } = useContext(AppContext)

  const handleAddCart = () => {
    const productAddedToCart = cartItems.some((item) => item === data)

    if (!productAddedToCart) {
      setCartItems([...cartItems, data])
    }
    setIsCartVisible(true)
  }

  return { handleAddCart }
}

export default useProductCard

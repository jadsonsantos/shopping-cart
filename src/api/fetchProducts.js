const fetchProducts = async (query) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!data || !data.results) {
      console.error('API response does not contain results:', data)
      return []
    }

    return data.results || []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default fetchProducts

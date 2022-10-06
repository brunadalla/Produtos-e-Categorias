import showProductsByCategoryService from "../services/showProductsByCategory.service"

const showProductsByCategoryController = async (request, response) => {
  try {
    const id = request.params.id
    const products = await showProductsByCategoryService(id)

    return response.json(products)
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default showProductsByCategoryController
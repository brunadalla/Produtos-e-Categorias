import listProductsService from "../services/listProducts.service"

const listProductsController = async (request, response) => {
  try {
    const products = await listProductsService()

    return response.json(products)
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default listProductsController

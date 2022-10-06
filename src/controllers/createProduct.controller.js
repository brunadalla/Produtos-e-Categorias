import createProductService from "../services/createProduct.service"

const createProductController = async (request, response) => {
  try {
    const { name, price, category_id } = request.body

    const product = await createProductService(name, price, category_id)

    return response.status(201).json({
      message: "Product created",
      product,
    })
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default createProductController

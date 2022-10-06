import updateProductService from "../services/updateProduct.service"

const updateProductController = async (request, response) => {
  try {
    const id = request.params.id
    const info = request.body

    const editedProduct = await updateProductService(id, info)

    return response.status(200).json({
      message: "Product updated",
      product: editedProduct,
    })
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default updateProductController

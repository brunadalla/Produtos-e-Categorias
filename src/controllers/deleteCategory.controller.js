import deleteCategoryService from "../services/deleteCategory.service"

const deleteCategoryController = async (request, response) => {
  try {
    const id = request.params.id

    await deleteCategoryService(id)

    return response.status(204).send()
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default deleteCategoryController

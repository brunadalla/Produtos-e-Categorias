import updateCategoryService from "../services/updateCategory.service"

const updateCategoryController = async (request, response) => {
  try {
    const id = request.params.id
    const { name } = request.body

    const editedCategory = await updateCategoryService(id, name)

    return response.status(200).json({
      message: "Category updated",
      category: editedCategory,
    })
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default updateCategoryController

import createCategoryService from "../services/createCategory.service"

const createCategoryController = async (request, response) => {
  try {
    const { name } = request.body
    const category = await createCategoryService(name)

    return response.status(201).json({
      message: "Category created",
      category,
    })
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default createCategoryController

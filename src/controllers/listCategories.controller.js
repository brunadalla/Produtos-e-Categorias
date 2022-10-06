import listCategoriesService from "../services/listCategories.service"

const listCategoriesController = async (request, response) => {
  try {
    const categories = await listCategoriesService()

    return response.json(categories)
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default listCategoriesController

import showCategoryInfoService from "../services/showCategoryInfo.service"

const showCategoryInfoController = async (request, response) => {
  try {
    const id = request.params.id
    const info = await showCategoryInfoService(id)

    return response.json(info)
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default showCategoryInfoController

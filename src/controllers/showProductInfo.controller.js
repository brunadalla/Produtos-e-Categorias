import showProductInfoService from "../services/showProductInfo.service"

const showProductInfoController = async (request, response) => {
  try {
    const id = request.params.id
    const info = await showProductInfoService(id)

    return response.json(info)
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    })
  }
}

export default showProductInfoController

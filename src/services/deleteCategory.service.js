import database from "../database"

const deleteCategoryService = async (id) => {
  try {
    await database.query("DELETE FROM categories c WHERE c.id = $1;", [id])
  } catch (error) {
    throw new Error(error)
  }
}

export default deleteCategoryService

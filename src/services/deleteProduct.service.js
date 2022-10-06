import database from "../database"

const deleteProductService = async (id) => {
  try {
    await database.query("DELETE FROM products p WHERE p.id = $1;", [id])
  } catch (error) {
    throw new Error(error)
  }
}

export default deleteProductService

import database from "../database"

const listCategoriesService = async () => {
  try {
    const res = await database.query("SELECT * FROM categories;", [])
    console.log(res.rows)
    return res.rows
  } catch (error) {
    throw new Error(error)
  }
}

export default listCategoriesService

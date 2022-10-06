import database from "../database"

const showCategoryInfoService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories c WHERE c.id = $1;",
      [id]
    )

    return res.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

export default showCategoryInfoService

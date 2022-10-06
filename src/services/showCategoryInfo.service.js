import database from "../database"

const showCategoryInfoService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories ctgs WHERE ctgs.id = $1;",
      [id]
    )

    return res.rows
  } catch (error) {
    throw new Error(error)
  }
}

export default showCategoryInfoService

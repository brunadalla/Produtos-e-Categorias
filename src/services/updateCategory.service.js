import database from "../database"

const updateCategoryService = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $2 WHERE id = $1 RETURNING *",
      [id, name]
    )

    return res.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

export default updateCategoryService

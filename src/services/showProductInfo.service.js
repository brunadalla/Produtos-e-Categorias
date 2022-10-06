import database from "../database"

const showProductInfoService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM products p WHERE p.id = $1;",
      [id]
    )

    return res.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

export default showProductInfoService

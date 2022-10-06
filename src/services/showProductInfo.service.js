import database from "../database"

const showProductInfoService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM products pds WHERE pds.id = $1;",
      [id]
    )
    
    return res.rows
  } catch (error) {
    throw new Error(error)
  }
}

export default showProductInfoService
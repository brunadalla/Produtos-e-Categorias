import database from "../database"

const showProductsByCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name category FROM products p JOIN categories c ON c.id = p.category_id WHERE c.id = $1;",
      [id]
    )
    
    return res.rows
  } catch (error) {
    throw new Error(error)
  }
}

export default showProductsByCategoryService
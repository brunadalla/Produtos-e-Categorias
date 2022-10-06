import database from "../database"

const updateProductService = async (id, info) => {
  try {
    let query = "UPDATE products SET "

    const keys = Object.keys(info)
    const values = Object.values(info)

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `
    })

    query = query.slice(0, -2)
    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *`

    const res = await database.query(query, [...values, id])

    return res.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

export default updateProductService

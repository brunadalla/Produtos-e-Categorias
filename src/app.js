import express from "express"
import "dotenv/config"

import { startDatabase } from "./database"
import categoriesRouter from "./routes/categories.routes"
import productsRouter from "./routes/products.routes"

const app = express()
app.use(express.json())

app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)

const PORT = process.env.PORT || 3333
console.log(PORT)

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`)
  startDatabase()
})

export default app

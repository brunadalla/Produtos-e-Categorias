import { Router } from "express"

import createProductController from "../controllers/createProduct.controller"
import listProductsController from "../controllers/listProducts.controller"

const productsRouter = Router()

productsRouter.post("", createProductController)
productsRouter.get("", listProductsController)

export default productsRouter

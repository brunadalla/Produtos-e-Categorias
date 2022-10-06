import { Router } from "express"

import createProductController from "../controllers/createProduct.controller"
import listProductsController from "../controllers/listProducts.controller"
import showProductInfoController from "../controllers/showProductInfo.controller" 
import showProductsByCategoryController from "../controllers/showProductsByCategory.controller" 

const productsRouter = Router()

productsRouter.post("", createProductController)
productsRouter.get("", listProductsController)
productsRouter.get("/:id", showProductInfoController)
productsRouter.get("/category/:id", showProductsByCategoryController)

export default productsRouter

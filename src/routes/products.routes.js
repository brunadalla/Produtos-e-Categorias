import { Router } from "express"

import createProductController from "../controllers/createProduct.controller"
import listProductsController from "../controllers/listProducts.controller"
import showProductInfoController from "../controllers/showProductInfo.controller"
import showProductsByCategoryController from "../controllers/showProductsByCategory.controller"
import deleteProductController from "../controllers/deleteProduct.controller"
import updateProductController from "../controllers/updateProduct.controller"

const productsRouter = Router()

productsRouter.post("", createProductController)
productsRouter.get("", listProductsController)
productsRouter.get("/:id", showProductInfoController)
productsRouter.get("/category/:id", showProductsByCategoryController)
productsRouter.delete("/:id", deleteProductController)
productsRouter.patch("/:id", updateProductController)

export default productsRouter

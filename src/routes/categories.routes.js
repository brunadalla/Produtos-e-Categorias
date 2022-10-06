import { Router } from "express"

import createCategoryController from "../controllers/createCategory.controller"
import listCategoriesController from "../controllers/listCategories.controller"
import showCategoryInfoController from "../controllers/showCategoryInfo.controller" 

const categoriesRouter = Router()

categoriesRouter.post("", createCategoryController)
categoriesRouter.get("", listCategoriesController)
categoriesRouter.get("/:id", showCategoryInfoController)

export default categoriesRouter

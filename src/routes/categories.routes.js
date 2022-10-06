import { Router } from "express"

import createCategoryController from "../controllers/createCategory.controller"
import listCategoriesController from "../controllers/listCategories.controller"

const categoriesRouter = Router()

categoriesRouter.post("", createCategoryController)
categoriesRouter.get("", listCategoriesController)

export default categoriesRouter

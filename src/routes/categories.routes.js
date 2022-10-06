import { Router } from "express"

import createCategoryController from "../controllers/createCategory.controller"
import listCategoriesController from "../controllers/listCategories.controller"
import showCategoryInfoController from "../controllers/showCategoryInfo.controller"
import deleteCategoryController from "../controllers/deleteCategory.controller"
import updateCategoryController from "../controllers/updateCategory.controller"

const categoriesRouter = Router()

categoriesRouter.post("", createCategoryController)
categoriesRouter.get("", listCategoriesController)
categoriesRouter.get("/:id", showCategoryInfoController)
categoriesRouter.delete("/:id", deleteCategoryController)
categoriesRouter.patch("/:id", updateCategoryController)

export default categoriesRouter

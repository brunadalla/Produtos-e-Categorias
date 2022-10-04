import { Router } from "express"

import listCategoriesController from "../controllers/listCategories.controller"

const categoriesRouter = Router()

categoriesRouter.get("", listCategoriesController)

export default categoriesRouter
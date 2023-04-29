import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

import { CreateAction } from "../../utils/reducer/Reducer.utils"

const setCategoriesMap = (categoriesMap) => CreateAction(CATEGORIES_ACTION_TYPES)
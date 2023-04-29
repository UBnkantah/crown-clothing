import {Routes, Route} from "react-router-dom"
import { useEffect } from "react"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview"
import Category from "../Category/Category"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import {setCategoriesMap} from "../../routes/Category/Category"
import { useDispatch } from "react-redux"

const ShopComponent = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />     
      </Routes>
    
  )
}

export default ShopComponent
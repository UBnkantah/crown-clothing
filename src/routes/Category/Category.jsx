import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../context/CategoriesContext"
import ProductCard from "../../components/ProductCard/ProductComponent"
import "./Category.css"
const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);


    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <>
        <h2 className="title">{category}</h2>
        <div className="category-container">
            
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product }/>)
            }
        </div>
    </>
    
  )
}

export default Category
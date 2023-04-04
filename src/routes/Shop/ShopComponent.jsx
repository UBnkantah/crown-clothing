import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductCard from "../../components/ProductCard/ProductComponent"
import "./ShopStyles.css"
const ShopComponent = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ShopComponent
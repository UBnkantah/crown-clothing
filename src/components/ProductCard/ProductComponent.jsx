import "./ProductStyles.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./ProductStyles.css"

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)
    return(
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <button className="add-to-cart-btn" onClick={addProductToCart}>
            Add to cart
        </button>
    </div>
    )
}

export default ProductCard
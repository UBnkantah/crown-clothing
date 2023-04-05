import "./CartItem.css"

const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
  return (
    <div className="cart-item-container">
      <div className="cart-item-details">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="cart-item-details"> 
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
        
    </div>
    
  )
}

export default CartItem
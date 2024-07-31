import { getImagesUrl } from "../util/image-util"

const Cart = ({cart}) => {
  return (
    <div className="cart-container">
        <h3>Your Cart ({cart.length})</h3>

        <img src={getImagesUrl("illustration-empty-cart.svg")} alt="illustration-empty-cart" />

        <p>Your added items will appear here</p>
    </div>
  )
}

export default Cart
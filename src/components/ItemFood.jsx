import { BiCartAdd } from "react-icons/bi";

const ItemFood = ({ name, category , price , image }) => {

      return (
        <>
            <div className="food-card">
                <div className="card-img-container"> 
                    <img src={image} alt={name} />
                    <button className="card-btn"><BiCartAdd className="add-icon"/> Add to Card</button>
                </div>
                <div className="card-text">
                    <p>{category}</p>
                    <h3>{name}</h3>
                    <span>${price}</span>
                </div>
            </div>

        </>
      )
}

export default ItemFood
import { useState } from "react";
import { BiCartAdd } from "react-icons/bi";


const ItemFood = ({ name, category , price , image }) => {



    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    const activeStyle = !active ? {border: "solid 2px transparent"} : {border: "solid 2px var(--Rose500)"};



    return (
      <>
          <div className="food-card">
              <div className="card-img-container">
                <img src={image} alt={name} style={activeStyle}/>


                <button 
                    className="card-btn"
                    onClick={handleClick}
                    >
                    <BiCartAdd className="add-icon"/>
                        Add to Card
                </button>

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
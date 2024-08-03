import { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { CiCirclePlus , CiCircleMinus } from "react-icons/ci";




const ItemFood = ({ name, category , price , image }) => {



    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    const activeStyle = !active ? {border: "solid 2px transparent"} : {border: "solid 2px var(--Red)"};



    return (
      <>
          <div className="food-card">
              <div className="card-img-container">
                <img src={image} alt={name} style={activeStyle}/>

                {
                    !active ? 
                        <button className="card-btn" onClick={handleClick}>
                            <BiCartAdd className="add-icon"/>
                            Add to Card
                        </button> 
                        :
                        <button 
                            className="active-btn" 
                            onClick={handleClick}
                            >
                            <CiCirclePlus />
                                0
                            <CiCircleMinus />
                    </button>
                }
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
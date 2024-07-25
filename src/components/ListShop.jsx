import waffle from "../assets/images/image-waffle-mobile.jpg"
import { BiCartAdd } from "react-icons/bi";

const ListShop = () => {
  return (
    <section className="list-container">
        <div className="food-card">
            <div className="card-img-container"> 
                <img src={waffle} alt="waffle" />
                <button className="card-btn"><BiCartAdd className="add-icon"/> Add to Card</button>
            </div>
            <div className="card-text">
                <p>Waffle</p>
                <h3>Waffle with Berries</h3>
                <span>$6.50</span>
            </div>
        </div>


        <div className="food-card">
            <div className="card-img-container"> 
                <img src={waffle} alt="waffle" />
                <button className="card-btn"><BiCartAdd className="add-icon"/> Add to Card</button>
            </div>
            <div>
                <p>Waffle</p>
                <h3>Waffle with Berries</h3>
                <span>$6.50</span>
            </div>
        </div>
    </section>
  )
}

export default ListShop
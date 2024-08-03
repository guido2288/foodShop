
import { useState } from "react";
import Cart from "./components/Cart"
import ItemFood from "./components/ItemFood"
import { data } from "./data/products"
import { getImagesUrl } from "./util/image-util"
import { FiShoppingCart } from "react-icons/fi";


function App() {
  
  const [cart, setCart] = useState([{
    name: "Waffle with Berries",
    quantity: 2,
    price: 6.5
  },
  {
    name: "Waffle with Berries",
    quantity: 2,
    price: 6.5
  }
])

  return (
   
      <main>
      <nav>
        <h2>Desserts</h2>
        <div className="cart-icon-container">
          <FiShoppingCart className="cart-icon"/>
          <span>0</span>
        </div>

      </nav>
      <section className="list-container">

        {
          data.map( (item , idx) => (
            <ItemFood 
              key={idx}
              name={item.name}
              category={item.category}
              price={item.price}
              image={getImagesUrl(item.image.mobile)}
            />
          ) )
        }
      </section>

      <section>
        <Cart cart={cart}/>
      </section>
      </main>

  )
}

export default App

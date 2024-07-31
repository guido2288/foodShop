
import { useState } from "react";
import Cart from "./components/Cart"
import ItemFood from "./components/ItemFood"
import { data } from "./data/products"
import { getImagesUrl } from "./util/image-util"
import { FiShoppingCart } from "react-icons/fi";


function App() {  

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
        <Cart cart={0}/>
      </section>
      </main>

  )
}

export default App


import ItemFood from "./components/ItemFood"
import { data } from "./data/products"
import { getImagesUrl } from "./util/image-util"




function App() {  

  console.log(data)

  return (
    <main>
      <h2>Desserts</h2>

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
      
    </main>
  )
}

export default App

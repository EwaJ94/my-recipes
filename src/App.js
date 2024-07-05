import Category from "./components/Category"
import Content from "./components/Content"
import Search from "./components/Search"
import { useState } from "react"
import axios from "axios"


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [dishType, setDishType] = useState("")

  const appId = "ae8e0993"
  const appKey = "9f769dfec4f99a9746075132ba6e2422"

    const fetchData = async (category) => {
      const url = 'https://api.edamam.com/api/recipes/v2'
      const params = {
        type: "public",
        q: category,
        app_id: appId,
        app_key: appKey,
        dishType: category
      }

      try {
        const response = await axios.get(url, {params})
        setRecipes(response.data.hits)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      }

    };
    
    const handleCategoryClick = (category) => {
      setDishType(category)
      fetchData(category)
      console.log(category);
    }


  return <div>
    <Search />
    <section className="main-part">
      <Category onCategoryClick={handleCategoryClick} />
      <Content recipes={recipes} dishType = {dishType}/>
    </section>
    </div>
}

export default App

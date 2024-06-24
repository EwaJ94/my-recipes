import "./Category.css"
import { useState } from "react"
import axios from "axios"

const Category = () => {
    const [recipes, setRecipes] = useState([])
    const [dishType, setDishType] = useState("")

    const appId = "ae8e0993"
    const appKey = "9f769dfec4f99a9746075132ba6e2422"
    
    
      const fetchData = async () => {
        const url = 'https://api.edamam.com/api/recipes/v2'
        const params = {
          type: "public",
          q: "",
          app_id: appId,
          app_key: appKey,
          dishType: dishType
        }
  
        try {
          const response = await axios.get(url, {params})
          setRecipes(response.data.hits)
        } catch (error) {
          console.error("Error fetching recipes:", error)
        }
      };
  

  
    return <section className="category">
         <div>
      <h2>Category</h2>
      <ul className="recipe-category">
        <li>Alcohol-cocktail</li>
        <li>Biscuits and cookies</li>
        <li>Bread</li>
        <li>Cereals</li>
        <li>Condiments and sauces</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>Main course</li>
        <li>Pancake</li>
        <li>Preps</li>
        <li>Preserves</li>
        <li>Salad</li>
        <li>Sandwiches</li>
        <li>Side dish</li>
        <li>Soup</li>
        <li>Starter</li>

        
        

      </ul>
      {/* <button onClick={fetchData}>Search Recipes</button>
      <div>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.source}</p>
          </li>
        ))}
      </ul> 
      </div> */}
      </div>
      </section>
  }
  
  export default Category
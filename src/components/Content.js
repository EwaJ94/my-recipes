import "./Content.css"
import { CiHeart } from "react-icons/ci"

const Content = ({recipes, saveOneRecipe}) => {
  return <section className="main-content">
      {recipes.length > 0 && (
        
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {recipes.map((recipe, index) => (
              <li key={index} className="one-recipe">
        
                <CiHeart className="save-recipe" onClick={saveOneRecipe}/>
                <h3 className="recipe-title">{recipe.recipe.label}</h3>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image"/>

                <div className="author-and-url"> 
                <p className="recipe-author">{recipe.recipe.source}</p>
                <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-url">
                  View Recipe
                </a>
             
                </div>

              </li>
            ))}
          </ul>

        </div>
        
      )}
      
    </section>
 
  
}


export default Content

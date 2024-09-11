import "./Content.css"
import { CiHeart } from "react-icons/ci"


const Content = ({recipes, saveOneRecipe, wasSearched, showSavedRecipes, listOfRecipes, toggleSavedRecipes}) => {

  // const isRecipeSaved = listOfRecipes.some(
  //   (recipe) => recipe.recipe.uri === currentRecipe.recipe.uri
  // )
  
  return <section className="main-content">
    {wasSearched && recipes.length === 0 ? (
        <div className="no-recipes">
          <p>No recipes found, try it again.</p>
        </div>
      ): (
      
        
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {recipes.map((recipe, index) => (
              <li key={index} className="one-recipe">
        
                <CiHeart className="save-recipe" onClick={() => saveOneRecipe(recipe)}> </CiHeart>
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
       {showSavedRecipes && (
    <section className="list-of-saved-recipes">
      {listOfRecipes.length > 0 ? (
        
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {listOfRecipes.map((savedRecipes, index) => (
              <li key={index} className="one-recipe">
        
                <CiHeart className="save-recipe" onClick={() => saveOneRecipe(savedRecipes)}/>
                <h3 className="recipe-title">{savedRecipes.recipe.label}</h3>
                <img src={savedRecipes.recipe.image} alt={savedRecipes.recipe.label} className="recipe-image"/>

                <div className="author-and-url"> 
                <p className="recipe-author">{savedRecipes.recipe.source}</p>
                <a href={savedRecipes.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-url">
                  View Recipe
                </a>
             
                </div>
              
              </li>
            ))}
          </ul>

        </div>
      ):(
        <p className="no-recipes">No saved recipes.</p>
      )}
      
      
    </section>
  )}
    </section>
 
  
}


export default Content

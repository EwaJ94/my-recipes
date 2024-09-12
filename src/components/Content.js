import "./Content.css"
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"


const Content = ({recipes, saveOneRecipe, wasSearched, showSavedRecipes, listOfRecipes, toggleSavedRecipes}) => {

  const [savedRecipeUris, setSavedRecipeUris] = useState(
    new Set(listOfRecipes.map((recipe) => recipe.recipe.uri))
  );

  const handleSaveRecipe = (recipe) => {
    const uri = recipe.recipe.uri
    if (savedRecipeUris.has(uri)) {
      setSavedRecipeUris((prevUris) => {
        const updatedUris = new Set(prevUris);
        updatedUris.delete(uri)
        return updatedUris
      })
    } else {
      setSavedRecipeUris((prevUris) => new Set(prevUris).add(uri))
    }
    saveOneRecipe(recipe)
  };
  
  return (
    <section className="main-content">
    {wasSearched && recipes.length === 0 ? (
        <div className="no-recipes">
          <p>No recipes found, try it again.</p>
        </div>
      ):(
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {recipes.map((recipe, index) => {
              const isRecipeSaved = savedRecipeUris.has(recipe.recipe.uri)

              return (
                <li key={index} className="one-recipe">
                  {isRecipeSaved ? (<FaHeart className="save-recipe" onClick={() => handleSaveRecipe(recipe)}/>)
                  :(<CiHeart className="save-recipe" onClick={() => handleSaveRecipe(recipe)} />)}
               
                <h3 className="recipe-title">{recipe.recipe.label}</h3>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image"/>

                <div className="author-and-url"> 
                  <p className="recipe-author">{recipe.recipe.source}</p>
                  <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-url">
                  View Recipe
                  </a>
             
                </div>
              </li>
            )
            })}
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
                    <FaHeart className="save-recipe" onClick={() => handleSaveRecipe(savedRecipes)}/>

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
 )
}

export default Content

import "./SavedRecipes.css"
import { CiHeart } from "react-icons/ci"


const SavedRecipes = ({listOfRecipes, showSavedRecipes, toggleSavedRecipes}) => {

  return <div>
    <CiHeart className="heart-icon" onClick={toggleSavedRecipes}/>
    {showSavedRecipes && (
    <section className="list-of-saved-recipes">
      {listOfRecipes.length > 0 ? (
        
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {listOfRecipes.map((savedRecipes, index) => (
              <li key={index} className="one-recipe">
        
                <CiHeart className="save-recipe"/>
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
    
    </div>
  
}

export default SavedRecipes

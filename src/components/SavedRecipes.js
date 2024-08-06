import "./SavedRecipes.css"
import { CiHeart } from "react-icons/ci"


const SavedRecipes = ({listOfSavedRecipes}) => {
  const showListOfSavedRecipes = () => {

  }


  return <div>
    <CiHeart className="heart-icon" onClick={showListOfSavedRecipes}/>
    <section className="list-of-saved-recipes">
      {listOfSavedRecipes.length > 0 && (
        
        <div className="recipes-section">
          <ul className="list-of-recipes">
            {listOfSavedRecipes.map((listOfSavedRecipes, index) => (
              <li key={index} className="one-recipe">
        
                <CiHeart className="save-recipe"/>
                <h3 className="recipe-title">{listOfSavedRecipes.recipe.label}</h3>
                <img src={listOfSavedRecipes.recipe.image} alt={listOfSavedRecipes.recipe.label} className="recipe-image"/>

                <div className="author-and-url"> 
                <p className="recipe-author">{listOfSavedRecipes.recipe.source}</p>
                <a href={listOfSavedRecipes.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-url">
                  View Recipe
                </a>
             
                </div>

              </li>
            ))}
          </ul>

        </div>
        
      )}
      
    </section>
    </div>
}

export default SavedRecipes

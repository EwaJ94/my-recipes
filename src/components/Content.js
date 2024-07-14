import "./Content.css"

const Content = ({recipes, dishType}) => {
  return <section className="main-content">
      {recipes.length > 0 && (
        
        <div className="recipes-section">

          {/* <h3 className="dish-type">{dishType}</h3> */}
          <ul className="list-of-recipes">
            {recipes.map((recipe, index) => (
              <li key={index} className="one-recipe">
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

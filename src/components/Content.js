import "./Content.css"

const Content = ({recipes, dishType}) => {
  return (
    <section className="recipes-section">
      {recipes.length > 0 && (
        <div>

          <h3 className="dish-type">{dishType}</h3>
          <ul className="list-of-recipes">
            {recipes.map((recipe, index) => (
              <li key={index}>
                <h3 className="recipe-title">{recipe.recipe.label}</h3>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image"/>
                <p className="recipe-author">{recipe.recipe.source}</p>
                <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-url">
                  View Recipe
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

  
  export default Content
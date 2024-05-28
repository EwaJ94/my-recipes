import Category from "./components/Category"
import Content from "./components/Content"
import Search from "./components/Search"
import { useState, useEffect } from "react"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const appId = "ae8e0993"; // Replace with your Edamam app ID
  const appKey = "9f769dfec4f99a9746075132ba6e2422"; // Replace with your Edamam app key
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data.hits);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [appId, appKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              {recipe.recipe.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
}

export default App

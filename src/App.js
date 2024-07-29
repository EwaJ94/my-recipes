import Search from "./components/Search"
import SavedRecipes from "./components/SavedRecipes"
import Category from "./components/Category"
import Content from "./components/Content"
import { useEffect, useState } from "react"
import axios from "axios"


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState ([])
  const [dishType, setDishType] = useState("")
  const [searchedWord, setSearchedWord] = useState("")

  const appId = "ae8e0993"
  const appKey = "9f769dfec4f99a9746075132ba6e2422"

    const fetchData = async (query, type="category") => {
      const url = 'https://api.edamam.com/api/recipes/v2'
      const params = {
        type: "public",
        q: query,
        app_id: appId,
        app_key: appKey,
      }

      if (type === "category") {
        params.dishType = query
      }

    console.log("Fetching data for category:", query);
    console.log("API URL:", url);
    console.log("API Params:", params);

      try {
        const response = await axios.get(url, {params})
        const fetchedRecipes = response.data.hits || []
        console.log("Fetched recipes:", fetchedRecipes);
        setRecipes(fetchedRecipes)
        setFilteredRecipes(fetchedRecipes)
      } catch (error) {
        console.error("Error fetching recipes:", error)
        setRecipes([])
        setFilteredRecipes([])
      }

    };
    
    const handleCategoryClick = (category) => {
      console.log("Category clicked:", category);
      setDishType(category)
      setSearchedWord("")
      fetchData(category, "category")
    }

    const handleSearch = (searchedWord) => {
      console.log("Search term:", searchedWord)
      setSearchedWord(searchedWord)
      fetchData(searchedWord, "search")
    }

    const getFilteredRecipes = (searchedWord, recipesToFilter) => {
      console.log(filteredRecipes);
      console.log(searchedWord);
      console.log(recipesToFilter);
      if (!searchedWord) {
        setFilteredRecipes(recipesToFilter);
        console.log("No recipes found.");
      } else {
        const filtered = recipesToFilter.filter(recipe => 
          recipe?.recipe?.label?.toLowerCase().includes(searchedWord.toLowerCase())
        );
        
        console.log("Filtered recipes:", filtered)
        setFilteredRecipes(filtered);
        
      }
    };
  
    useEffect(() => {
      getFilteredRecipes(searchedWord, recipes);

    }, [searchedWord, recipes]);


  return <div>
    <section className="search-part">
        <Search onSearch={handleSearch}/>
        <SavedRecipes />
    </section>
    <section className="main-part">
      <Category onCategoryClick={handleCategoryClick} />
      <Content recipes={filteredRecipes} />
    </section>
    </div>
}

export default App

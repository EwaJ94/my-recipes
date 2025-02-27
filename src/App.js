import Search from "./components/Search"
import SavedRecipes from "./components/SavedRecipes"
import Category from "./components/Category"
import Content from "./components/Content"
import DarkMode from "./components/DarkMode"
import { useEffect, useState } from "react"
import axios from "axios"
import food from "./img/food.ico"
import menu from "./img/menu.png"
import cross from "./img/cross.png"

const App = () => {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState ([])
  const [searchedWord, setSearchedWord] = useState("")
  const [listOfFavoriteRecipes, setlistOfFavoriteRecipes] = useState([])
  const [showSavedRecipes, setShowSavedRecipes] = useState(false)
  const [wasSearched, setWasSearched] = useState(false)
  const [iconChanged, setIconChanged] = useState(false)
  const [showCategoryPanel, setShowCategoryPanel] = useState(false)

  const appId = process.env.REACT_APP_API_ID
  const appKey = process.env.REACT_APP_API_KEY

    const fetchData = async (query, type="category") => {
      setLoading(true)
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

      try {
        const response = await axios.get(url, {params})
        const fetchedRecipes = response.data.hits || []

        setRecipes(fetchedRecipes)
        setFilteredRecipes(fetchedRecipes)

    } catch (error) {
        console.error("Error fetching data:", error)

        if (error.response) {
          console.error(`API responded with status code ${error.response.status}`)
          alert (`Error: ${error.response.statusText}. Please try again later.`)
        } else if (error.request) {
          console.error("No response received:", error.request)
          alert ("No response from the server. Please check your internet connection.")
        } else {
          console.error("Error:", error.message);
          alert(`Error: ${error.message}`)
        }

      setRecipes([])
      setFilteredRecipes([])
      } 
      
      finally {
        setLoading(false);  
      }
    };

    const changeIconStyle = () => {
      setIconChanged(true)
    }

    const handleShowCategoryPanel = () => {
      setShowCategoryPanel((prev) => !prev)
    }

    const handleSearchOrCategoryClick = () => {
      setWasSearched(true)
    }
   
    const handleCategoryClick = (category) => {
      setShowSavedRecipes(false)
      handleSearchOrCategoryClick()
      setSearchedWord("")
      fetchData(category, "category")
    }

    const handleSearch = (searchedWord) => {
      if (!searchedWord.trim()) return
        setShowSavedRecipes(false)
        handleSearchOrCategoryClick()
        setSearchedWord(searchedWord)
        fetchData(searchedWord, "search")
    }

    const getFilteredRecipes = (searchedWord, recipesToFilter) => {
      if (!searchedWord) {
        setFilteredRecipes(recipesToFilter);
      } else {
        const filtered = recipesToFilter.filter(recipe => 
          recipe?.recipe?.label?.toLowerCase().includes(searchedWord.toLowerCase())
        );
        setFilteredRecipes(filtered);
      }
    }
  
    useEffect(() => {
      getFilteredRecipes(searchedWord, recipes);
    }, [searchedWord, recipes]);

    const saveOneRecipe = (recipeToSave) => {
      try {
        setlistOfFavoriteRecipes((prevRecipes) => {
        const isRecipeSaved = prevRecipes.some((recipe) => recipe.recipe.uri === recipeToSave.recipe.uri)
      
      let updatedRecipes
      if (isRecipeSaved) {
        updatedRecipes = prevRecipes.filter((recipe) => recipe.recipe.uri !== recipeToSave.recipe.uri)
      } else {
        updatedRecipes = [...prevRecipes, recipeToSave]
      }

      localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes))
      return updatedRecipes
    })
  } catch (error) {
    console.error("Failed to save recipe:", error);
    alert("An error occurred while saving the recipe. Please try again.");
  }
}
      
    useEffect (() => {
      const savedRecipesFromLS = localStorage.getItem("savedRecipes")
      if (savedRecipesFromLS) {
        setlistOfFavoriteRecipes(JSON.parse(savedRecipesFromLS))
      }
    }, [])
      
    const toggleSavedRecipes = () => {
      changeIconStyle()
      setWasSearched(false)
      setShowSavedRecipes((prev) => !prev)
      setFilteredRecipes([])
    }

  return <div>
    <img 
    src={food} 
    className={iconChanged ? "icon-changed" : "icon-default"} alt="fork and knife" />

    <img 
    onClick={handleShowCategoryPanel} 
    src={menu} alt="hamburger menu" 
    className={`hamburger-menu ${showCategoryPanel ? "hide" : ""}`} />
    
    <img 
    onClick={handleShowCategoryPanel} 
    src={cross} 
    alt="cross" 
    className={`close-menu ${showCategoryPanel ? "show" : ""}`} />
    
    <section className="search-part">
      <Search 
      onSearch={handleSearch} 
      changeIconStyle={changeIconStyle} />
      <SavedRecipes toggleSavedRecipes={toggleSavedRecipes}/>
      <DarkMode />
    </section>

    <section className="main-part">
      <Category 
      className = {`category ${showCategoryPanel ? "show" : "inactive-style"}`}
      onCategoryClick={handleCategoryClick}
      changeIconStyle={changeIconStyle}
      showCategoryPanel={showCategoryPanel}
      handleShowCategoryPanel={handleShowCategoryPanel}/>
      {loading ? <div className="spinner"><div className="loading-spinner"></div></div> : <Content recipes={filteredRecipes} 
      saveOneRecipe={saveOneRecipe} 
      wasSearched={wasSearched}
      listOfFavoriteRecipes={listOfFavoriteRecipes}
      showSavedRecipes={showSavedRecipes}/>}
    </section>
    </div>
}

export default App
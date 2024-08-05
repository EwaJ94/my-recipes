import Search from "./components/Search"
import SavedRecipes from "./components/SavedRecipes"
import Category from "./components/Category"
import Content from "./components/Content"
import { useEffect, useState } from "react"
import axios from "axios"
import food from "./img/food.ico"


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState ([])
  const [dishType, setDishType] = useState("")
  const [searchedWord, setSearchedWord] = useState("")
  const [iconStyle, setIconStyle] = useState({
    position: "absolute",
    right: "40rem",
    top: "20rem",
    height: "15rem",
    opacity: "0.2",
  })

  const changeIconStyle = () => {
    setIconStyle({
      position: "absolute",
      left: "5rem",
      top: "2rem",
      height: "5rem",
      opacity: "0.5",
    })
  } 


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


      try {
        const response = await axios.get(url, {params})
        const fetchedRecipes = response.data.hits || []

        setRecipes(fetchedRecipes)
        setFilteredRecipes(fetchedRecipes)
      } catch (error) {

        setRecipes([])
        setFilteredRecipes([])
      }

    };
    
    const handleCategoryClick = (category) => {

      setDishType(category)
      setSearchedWord("")
      fetchData(category, "category")
    }

    const handleSearch = (searchedWord) => {

      setSearchedWord(searchedWord)
      fetchData(searchedWord, "search")
    }

    const getFilteredRecipes = (searchedWord, recipesToFilter) => {
      
      if (!searchedWord) {
        setFilteredRecipes(recipesToFilter);
        console.log("No recipes found.");
      } else {
        const filtered = recipesToFilter.filter(recipe => 
          recipe?.recipe?.label?.toLowerCase().includes(searchedWord.toLowerCase())
        );

        setFilteredRecipes(filtered);
        
      }
    };
  
    useEffect(() => {
      getFilteredRecipes(searchedWord, recipes);

    }, [searchedWord, recipes]);


  return <div>
    <img src={food} style={iconStyle} className="icon" alt="fork and knife" />
    <section className="search-part">
      <Search onSearch={handleSearch} changeIconStyle={changeIconStyle} />
      <SavedRecipes />
    </section>
    <section className="main-part">
      <Category onCategoryClick={handleCategoryClick} changeIconStyle={changeIconStyle}/>
      <Content recipes={filteredRecipes} />
    </section>
    </div>
}

export default App

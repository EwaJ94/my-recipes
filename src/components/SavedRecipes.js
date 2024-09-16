import "./SavedRecipes.css"
import { FaHeart } from "react-icons/fa";


const SavedRecipes = ({toggleSavedRecipes}) => {

  return <FaHeart className="heart-icon" onClick={toggleSavedRecipes}/>
}

export default SavedRecipes
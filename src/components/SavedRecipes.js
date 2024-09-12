import "./SavedRecipes.css"
import { FaHeart } from "react-icons/fa";


const SavedRecipes = ({toggleSavedRecipes}) => {


  return <div>
    <FaHeart className="heart-icon" onClick={toggleSavedRecipes}/>
   
    
    </div>
  
}

export default SavedRecipes

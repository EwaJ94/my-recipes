import "./SavedRecipes.css"
import { CiHeart } from "react-icons/ci"


const SavedRecipes = ({toggleSavedRecipes}) => {


  return <div>
    <CiHeart className="heart-icon" onClick={toggleSavedRecipes}/>
   
    
    </div>
  
}

export default SavedRecipes

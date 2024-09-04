import "./DarkMode.css"
import Theme from "../img/Theme.png"

const DarkMode = () => {

  const themeMode = (e) => {
    if(e.target.checked){
      document.querySelector("body").setAttribute("data-theme", "dark")
    } else {
      document.querySelector("body").setAttribute("data-theme", "light")
    }
  }

  return <div className="dark-mode">
      <label className="switch">
        <input type="checkbox" onChange={themeMode} />
        

      <span className="slider">
      <img src={Theme} className="theme" alt="sun and moon" />
      </span>
    </label>
    </div>
  
}

export default DarkMode
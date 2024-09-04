import "./DarkMode.css"
import Sun from "../img/Sun.png"
import Moon from "../img/Moon.png"

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
        <img src={Sun} className="sun" alt="sun" />
        <img src={Moon} className="moon" alt="moon" />
      </span>
    </label>
    </div>
  
}

export default DarkMode

import "./DarkMode.css"
import Sun from "../img/Sun.png"
import Moon from "../img/Moon.png"

const DarkMode = () => {

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  }

  const themeMode = (e) => {
    if(e.target.checked){
      setDarkMode()
    } else {
      setLightMode()
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

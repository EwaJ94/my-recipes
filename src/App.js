import Category from "./components/Category"
import Content from "./components/Content"
import Search from "./components/Search"
// import { useState, useEffect } from "react"


const App = () => {


  return <div>
    <Search />
    <section className="main-part">
      <Category />
      <Content />
    </section>
    </div>
}

export default App

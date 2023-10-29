
import { useContext } from 'react'
import './App.css'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Toggle from './Components/Toggle'
import Who from './Components/Who'
import Works from './Components/Works'
import {ThemeContext} from './context'

function App() {
  const theme= useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

 return (
  
  <div className="a" style={{backgroundColor:darkMode? "#222" : "white" , color:darkMode&& "white"}}>
  <Toggle/>
  <Hero/>
  <Who/>
  <Works/>
  <Contact/>
   </div>
  )
  
}

export default App

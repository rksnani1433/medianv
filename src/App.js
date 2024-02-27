import './App.css'
import Sidebar from './Sidebar/index.js'
import Header from './Header/index.js'
import Searchbar from './Searchbar/index.js'
import Home from './Home/index.js'

const App=()=>(
  <div style={{display:"flex", width:"100%"}}>
    <div>
    <Sidebar/>
    </div>
    <div style={{width:'90%'}} >
    <Header/>
    <Searchbar/>
    <Home/>
    </div>
  </div>
)

export default App
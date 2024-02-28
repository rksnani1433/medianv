import './index.css'
import { CgAdd } from "react-icons/cg";

const Searchbar=()=>(
    <div className='main-container'>
        <div className='options'>
            <li className='option'>Live</li>
            <li className='option'>results</li>
            <li className='option'>History</li>
            <input className='search-field' type="text" placeholder="Search"/>
        </div>
        <div className='create-container'>
            <p className='create'>Create</p> 
            <p className='iconplus'><CgAdd/></p>
        </div>
    </div>
)
export default Searchbar
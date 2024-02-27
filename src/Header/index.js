import './index.css'
import { FaUserCircle } from "react-icons/fa";


const Header=()=>(
    <div className='main-container'>
        <div>
            <ul className='nav-items'>
                <li className='item selected-item'>Bid</li>
                <li className='item'>Pod</li>
                <li className='item'>Vendor</li>
                <li className='item'>user</li>
                <li className='user'> <p className='icon-user'><FaUserCircle /></p><p className='user-name'>Freight EG</p></li>

            </ul>
            </div>
    </div>
)

export default Header
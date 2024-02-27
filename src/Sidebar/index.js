import { CiGrid41 } from "react-icons/ci";
import './index.css'
const Sidebar=()=>(
    <div className="mainContainer">
        <div className="logo-container">
            <p className="logo-r"></p>
            <p className="logo-text">LOGO</p>
        </div>
        <div className="side-options-container">
                <div className='top-items'>
                   <div className="item select-item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>BID</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>POD</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>Vendor</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>User</li></div>
                   
                </div>
                <div className='bottom-items'>
                    <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>settings</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>Profile</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>Contactus</li></div>
                   <div className="item"><p className="grid"><CiGrid41 /></p><li className='sort-item'>LogOut</li></div>
                </div>
        </div>
    </div>
)
export default Sidebar
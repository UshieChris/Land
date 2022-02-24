
import './Navbar.css';

import { Link } from 'react-router-dom';
import main from '../img/main.png';
import Mainnav from './Mainnav';
import Landtex from './Landtex';
import Secondcont from './Secondcont';


const Navbar = () => {
    return (  
        <div className ="mdiv">
        <header className="header" style={{ height: '684px',
        width:'1440px',
        left: '-2px',
        // top: '0px',
        
        backgroundImage: `url(${main})` }}>
            {/* <div className="logo">
                <img src={logo}  alt = "hhher" />
            </div>
             */}
            {/* <div className = "dflex">

            </div> */}

            <Mainnav />
            <Landtex />
        </header>
        
        
    </div>
       
    );
}
 
export default Navbar;
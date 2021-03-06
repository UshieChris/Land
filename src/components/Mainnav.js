

import {FaSearch} from 'react-icons/fa';
import './Navbar.css'




const Mainnav = () => {
    return ( <div className='dflex'>
        <div className='mage'>
            <svg width="70" height="91" viewBox="0 0 100 91" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M4.91317 65.481C10.5514 55.7372 16.1349 45.966 21.8006 36.2222C26.3714 28.3944 36.2794 28.4217 40.8776 36.2496C46.5432 45.966 52.1814 55.7372 57.765 65.5083C61.4052 71.9129 58.504 79.5492 51.8256 81.5199C49.9918 82.0673 48.377 81.903 46.7348 80.6167C42.1366 77.0312 37.3742 73.5825 32.7213 69.997C31.6265 69.1759 30.9148 69.2033 29.8747 70.0518C25.2218 73.6099 20.4594 77.0585 15.8339 80.6988C14.2738 81.903 12.741 82.0946 10.9893 81.602C6.47327 80.4524 3.29832 76.1006 3.32569 71.1192C3.21621 69.0664 3.90047 67.2326 4.91317 65.481Z" fill="#009BC0"/>
            <path d="M56.5059 9.50897C63.02 20.7307 69.6162 31.8978 75.9387 43.2016C80.4821 51.3853 85.3814 59.3774 89.8975 67.5611C92.9356 73.0625 90.4997 79.2755 85.1625 81.5473C80.6738 83.4632 74.8166 81.383 72.3806 77.168C65.5654 65.3167 58.6134 53.5749 51.853 41.6689C47.1179 33.321 42.246 25.0826 37.5384 16.7347C33.8981 10.1932 39.8101 1.35265 46.7621 2.91275C51.9077 2.06428 54.2889 5.73189 56.5059 9.50897Z" fill="#1B3854"/>
            
            </svg>
                <div className='com'>
                    <p>ALLUVIUM</p>
                </div>
            </div>
                
            
            <div>
                <ul className = "mynavb">
{/*                     
                    <li>
                    <Link to ="/">HOME</Link>
                    </li>
                    
                    <li>
                    <Link to="/list" className="">BLOG</Link>
                    </li>

                
                    

                    <li><Link to="/contact">CONTACT</Link></li> */}
                  

                    <div className='mylist'>
                        <div className='sub'>
                        <li><a href="#">Our Products</a></li>
                        <li><a href="#p">Projects reels</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Support</a></li>
                        </div>
                        
                        <div className='nexc'>
                            <FaSearch />
                        </div>
                        <div className='cont'>
                            <p>Contact Us</p>
                        </div>
                    </div>
                   
                </ul>
                {/* <div>
                    <button type="submit" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
                </div> */}
                
            </div>
    </div> );
}
 
export default Mainnav;
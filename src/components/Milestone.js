
import { AiOutlineTeam, AiOutlineFileSearch, AiOutlineGlobal, AiOutlineMeh } from "react-icons/ai";
import { SiVonage } from "react-icons/si";
import { GiSpotedFlower } from "react-icons/gi";
import './Secondcont.css';
import alluvi from '../img/alluvi.png';

import Footer from './Footer';
import './Milestone.css';
const Milestone = () => {
    return ( <div>
        <h2>Our Major Milestones</h2>
        <p><span className="sen">Alluvium has worked with Fortune 500 companies to migrate their resources, deploying Atlassian Tools to support</span><span className = "show">Project/Delivery Lifecycle / Governance. We have been around for a while </span></p>

        <div className="mile">
            <div>
                <AiOutlineTeam />
                <p>30+</p>
            </div>
            <div>
                <AiOutlineFileSearch />
                <p>2700</p>
            </div>
            <div>
                <AiOutlineGlobal />
                <p>10</p>
            </div>
            <div>
                <AiOutlineMeh />
                <p>96%</p>
            </div>
        </div>
        <div className="trust">
        <h2>Trusted By</h2>
        </div>
        <div className="spa">
            <p> Private Bank <span className="siv"><SiVonage /> Vonage</span> <span className = "mspa"><GiSpotedFlower /></span><span className = "edf">eDF </span><span className="mspa">ENERGY</span> <span className = "atl"><img src ={alluvi} alt ="Alluvium does not exist" /> Attlasian </span> <span className ="will">Willis Tower Watoson</span></p>
        </div>
        <div className = "sel">
        <h3>
            Have a Project in mind?
        </h3>
            <button>Get in touch</button>
        </div>
        <Footer />
    </div>);
}
 
export default Milestone;
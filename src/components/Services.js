
import './Secondcont.css';
import { FaUserCog } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { FiAlignLeft } from "react-icons/fi";
const Services = () => {
    return (  <div className='dgena'>
        <h1>
        Our Services
        </h1>
        <p><span className='sen'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
       Aenean commodo ligula eget dolor. Aenean massa. </span><span className='show'>Cum sociis natoque penatibus et magnis dis ,</span> </p>

        <div className="serv">
            <div className="fse">
                <FiAlignLeft />
                <h2>Atlassian Tools Migration</h2>
                <p>We have deep experience across all migration use cases like Server to Cloud, Cloud to Data Center, Server to Data Center, Cloud to Cloud</p>

            </div>
            <div className="sse">
                <GiSpanner />
                <h2>Atlassian Engineering Team</h2>
                <p>We provide distributed Atlassian Engineering teams and embedded Engineers to major Atlassian partners and Enterprise users</p>
            </div>
            <div className="tse">
                <FaUserCog />

                <h2>Atlassian Marketplace PlugIns</h2>
                <p>We engineer and support migration and implementation plugins like Scrum Companion , Cloud Counter , Compare Jira Resources</p>
            </div>

        </div>
    </div>);
}
 
export default Services;
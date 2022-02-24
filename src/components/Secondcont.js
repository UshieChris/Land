import './Secondcont.css';
import Dloop from './Dloop';
import first from '../img/first.png';
import second from '../img/second.png';
import Services from './Services';
import Milestone from './Milestone';
const Secondcont = () => {

    const blogs = [
        {title : "Data Security", 
        d_text : "Data Security is so important to us that Everyone in our company is GDPR certified, even the janitor." },
        
        {title : "Simple UX",
         d_text : "We do our best to make sure the customer do not notice changes in their user experience, post migration."},
    
        {title : "Scalable",
         d_text : "Build, rinse, repeat do not notice changes in their user experience, post migration." },  
      ];
      
    return ( <div>
        <div className="valu">
            <h1>Our Values</h1>
            <div className = "dgen">
               
                <div className = "comb">
                    <div className = "first"><img src = {second} alt = "second not available" /></div>

                    <div className = "second"><img src = {first} alt = "first not available" /></div>
                
                    
                </div>
                <div className = "myf">
                    <Dloop blog = {blogs}/>
                </div>

            </div>
        </div>
        <Services />
        <Milestone />
    </div> );
}
 
export default Secondcont;
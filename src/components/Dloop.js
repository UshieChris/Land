
import MyList from "./Mylist";
const Dloop = (props) => {
    return (  <div>
            <div className='expenses'>
                {props.blog.map(myspense=><MyList title = {myspense.title} 
                d_text = {myspense.d_text} />)}
            </div>
    </div>
    );
}
 
export default Dloop;
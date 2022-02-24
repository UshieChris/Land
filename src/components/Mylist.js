const MyList = (props) => {
    return ( <div>
         <div className = "mylogs">
                <div className="tite">
                <h3>{props.title}</h3></div><br/>
    
                <div className="text">
                <p>{props.d_text}</p></div>
            </div>
    </div> );
}
 
export default MyList;
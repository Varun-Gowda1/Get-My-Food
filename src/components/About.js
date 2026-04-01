import React from "react";
import {UserContext} from "../utils/UserContext";

class About extends React.Component{

    constructor(){
        super();
        console.log("starting");
        
    }

    componentDidMount(){
        console.log("Make api call here");
        
    }

    componentWillUnmount(){
        console.log("Unmounted");
        //used to stop some processing if other component is requested
        //In functional components it is used as return () => {
            // do stopping logic here 
            // }
        
    }
    render(){
        console.log("rendering");
      
        return <div>
              <UserContext.Consumer>
            {(data)=> <h1>LoggedIn User : {data.username}</h1> }
        </UserContext.Consumer>
        </div>
    }
}

export default About
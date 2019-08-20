import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';


const buttonColor = {
    background: "blue",
    border: "10px",
    margin: "10px",
    border_radius: "5px",
    padding: "10px",
}

const elementButton = (props:any) =>{

  return(
    <button color={props.color} style={buttonColor}> {props.buttonText}
    
     </button> 
  )
}


export default elementButton;
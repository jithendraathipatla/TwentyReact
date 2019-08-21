import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const elementButton = (props:any) =>{
  

  return(
    <button className={props.buttonStyle} color={props.color}  onClick={props.onClick11} > {props.buttonText}
    
     </button> 
  )
}


export default elementButton;
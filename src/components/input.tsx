import React from 'react';

const input = {
    border:"1px solid black",
    padding: "8px",
    borderRadius :"5px",
}
const sampleInput = (props:any) => {
    
return(
    
    <div>
       <input className={props.inputClass} placeholder={props.inputPlaceHolder}  style={input} >
         
          </input>
    </div>
    )
}

export default sampleInput;
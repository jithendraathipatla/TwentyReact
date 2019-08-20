import React from 'react';
import CardComponent from './components/card';
import InputComponent from './components/input';
import ElementButton from './components/button';


const EntireReusable=() => {
 return(
 <div className="columns">
      <CardComponent 
        cardColClass={"column"}
        cardBorder={"card border-default mx-1"}
        cardTitle={"First Card"}
        cardText={"Sample Card 1" } >
        <InputComponent ClassName={"input"}  inputPlaceHolder={"Enter your Name"}>

        </InputComponent> 
        <ElementButton color={"primary"} buttonText={"Sign_in"}>  </ElementButton>
      </CardComponent>
      
      <br/>
     
       <CardComponent 
        cardColClass={"column"}
        cardBorder={"card border-info mx-1"}
        cardTitle={"Second Card"}
        cardText={"Sample Card 2" }>
         <InputComponent ClassName={"input"} inputPlaceHolder={"Enter your passsword"}>

        </InputComponent> 
    
        <ElementButton ClassName={"btn btn-sml"} buttonText={"Submit"}>  </ElementButton>
      </CardComponent>
      
      <br/>
      
       <CardComponent 
        cardColClass={"column"}
        cardBorder={"card border-primary mx-1"}
        cardTitle={"Third Card"}
        cardText={"Sample Card 3" }> 
         <InputComponent ClassName={"input"} inputPlaceHolder={"Enter your email"}>

        </InputComponent> 

        <ElementButton ClassName={"btn btn-sml"} buttonText={"jithendra"}>  </ElementButton>
      </CardComponent>
      

    </div>
  )
  
  
}
export default EntireReusable;


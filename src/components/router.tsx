import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputComponent from './input';
import CardComponent from './card'
import ElementButton from './button';

function Index() {
    return <h2>Home</h2>;
  }
  
  function About() {
    function handleClick() {
        alert('This about is clicked.');
      }
    return (
        <CardComponent 
        cardColClass={"column"}
        cardBorder={"card border-primary mx-1"}
        cardTitle={"Third Card"}
        cardText={"Sample Card for about Us" }> 
         <InputComponent ClassName={"input"} inputPlaceHolder={"This is for About"}  >

        </InputComponent> 

        <ElementButton buttonStyle={"button"} buttonText={"Hi About"} onClick11={handleClick}>  </ElementButton>
      </CardComponent>
    );
  }
  
  function Users() {
    
    function handleClick() {
        alert('The link was clicked.');
      }
    return (
       <div>
           <InputComponent ClassName={"input"} inputPlaceHolder={"This is from user"}  >
        </InputComponent> 
        <ElementButton buttonStyle={"button"} buttonText={"Hi user"} onClick11={handleClick}></ElementButton>
        
        </div>
    
    );
  }
  
  function AppRouter() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
        <hr></hr>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;
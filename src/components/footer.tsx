import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';


const footer = (props:any) => {
    return (
      
    <div>
        <footer className={props.footerName}>
            <div className="columns">
             <div className="column">
             <h1>About KonfHub</h1>
             <hr/>
             <p style={{textAlign: 'justify'}}>KonfHub is a platform for discovering and hosting high-quality technical events (mainly conferences). We believe in the mantra "learn, network, grow" - and conferences are one of the best places for that.1
                If you are interested in hosting your next technical event in KonfHub, you can directly host it or contact us at reachus@konfhub.com</p>
            </div>
            <div className="column">
            <h1>Quick Links</h1>
            <hr/>
            </div>
            <div className="column">
            <h1>Conferences in your City</h1>
            <hr/>
            </div>
             <div className="column">
             <h1>Twitter</h1>
             <hr/>
            </div>
            </div>
       </footer>
    </div>

    );
};

export default footer;
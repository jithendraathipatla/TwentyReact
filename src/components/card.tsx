import React from 'react';




const coloumnSizes = {
    height: "300px",
    padding: "30px",
    margin:"50px",
    margin_left :"40px",
}

const sampleCard = (props:any) => {
return(
    <div>
       <div className={props.cardColClass}>
            <div className={props.cardBorder} style={props.cardStyle}>
                {props.image}
              <div className="card-body"  style={coloumnSizes}>
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">
                 {props.cardText}
                </p>
                {props.children}
              </div>
            </div>
          </div>
    </div>
    )
}

export default sampleCard;
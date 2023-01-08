import React from "react";
import './cardStyle.css'

export const Card=(props)=>(
    <div className="card-container">
        <img src={`https://robohash.org/SKQ.png?set=set2&size=180x180`} alt="monster" />
          <h2 >{props.monster.name}</h2>
          <p>{props.monster.email}</p>
          
    </div>
)
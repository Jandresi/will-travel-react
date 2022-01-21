import React from 'react';
import './plan.css';

const Plan = (props) => {
    return (
        <div className="plan" id={props.id}>
            <div className="parrafo">
                <h5>{props.plan}</h5>
                <br/>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}

export default Plan

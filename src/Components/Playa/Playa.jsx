import React from 'react';
import './playa.css';

const Playa = (props) => {
    return (
        <div className="playa" id={props.id}>
            <div className="parrafo">
                <h3>{props.id.toUpperCase()}</h3>
                <br/>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}

export default Playa

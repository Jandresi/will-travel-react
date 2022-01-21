import React, { Fragment } from 'react';
import './footer.css';
import avion from './../../img/avion.png'

const Footer = () => {
    return (
        <Fragment>
            <div className='col-2 seccion-footer'>
                <img src={avion} alt='will travel' id='logo-footer' />
            </div>
            <div className='col-3.5 seccion-footer'>
                <h5><i className='fas fa-map-marker-alt'></i> Buenaventura - Colombia</h5>
                <h5><i className='fas fa-phone-alt'></i> (602)24-22222</h5>
                <h5><i className='fab fa-whatsapp'></i> +57 310 123 4567</h5>
            </div>
            <div className='col-3 seccion-footer'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque eos placeat quos? Totam, quibusdam non corrupti aspernatur recusandae eveniet suscipit quidem qui unde! Voluptas eveniet officia placeat neque mollitia? In quas</p>
            </div>
            <div className='col-3.5 seccion-footer'>
                <h5><i className='fab fa-facebook-square derecha'></i> - Will Travel Colombia</h5>
                <h5><i className='fab fa-twitter'></i> - @Willtravelco</h5>
                <h5><i className='fab fa-instagram'></i> - @Willtravelcolombia</h5>
            </div>
        </Fragment>
    )
}

export default Footer

import './footer.css';
import avion from './../../img/avion.png'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='seccion-footer'>
                <h5><i className='fas fa-map-marker-alt'></i> Buenaventura - Colombia</h5>
                <h5><i className='fas fa-phone-alt'></i> (602)24-12345</h5>
                <h5><i className='fab fa-whatsapp'></i> +57 310 123 4567</h5>
            </div>
            <div className='seccion-footer'>
                <img src={avion} alt='will travel' className='logo' />
            </div>
            <div className='seccion-footer'>
                <h5><i className='fab fa-facebook-square derecha'></i> - Will Travel Colombia</h5>
                <h5><i className='fab fa-twitter'></i> - @Willtravelco</h5>
                <h5><i className='fab fa-instagram'></i> - @Willtravelcolombia</h5>
            </div>
        </div>
    )
}

export default Footer

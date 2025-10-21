import './Cards.css'
import { FiUser } from "react-icons/fi";

const Cards = ({ title, detall, precio, icon }) => {
    return (
        <div className='card-producto'>
            <div className='producto-icon'>
                {icon ? icon : <FiUser className='icon-producto' />}
            </div>
            <div className='info-producto'>
                <h3>{title}</h3>
                <p>{detall}</p>
                <div className='precio-producto'>
                    <span>€{precio}</span>
                    <button>AÑADIR</button>
                </div>
            </div>
        </div>
    );
};

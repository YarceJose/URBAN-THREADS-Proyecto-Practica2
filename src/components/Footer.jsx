import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <footer className='footer'>
            <section className='section-footer'>
                <article className='inf-section'>
                    <div>
                        <h3>URBAN THREADS</h3>
                        <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
                    </div>
                    <div>
                        <h4>ENLACES</h4>
                        <ul>
                            <li><a href="">Inicio</a></li>
                            <li><a href="">Productos</a></li>
                            <li><a href="">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>AYUDA</h4>
                        <ul>
                            <li><a href="">Guía de tallas</a></li>
                            <li><a href="">Envíos</a></li>
                            <li><a href="">Devoluciones</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SÍGUENOS</h4>
                        <FaTwitter className='icon-footer' />
                        <FaPinterest className='icon-footer' />
                        <FaInstagram className='icon-footer' />
                    </div>

                </article>
                <article className='log-footer'>
                    <div>
                        <p>© 2024 Urban Threads. Todos los derechos reservados.</p>
                    </div>
                </article>
            </section>
        </footer>
    )
}
export default Footer;
import './Contact.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ICONOS
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
    return (
        <>
            <Navbar />
            <section className="section-page-contact">
                <div className="contact">
                    <h2>CONTACTO</h2>
                    <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
                </div>

                <article className="section-contact">
                    {/* ASIDE IZQUIERDO */}
                    <aside className="aside-info">
                        <h3>INFORMACIÓN DE CONTACTO</h3>
                        <section>
                            <div className="info-contact">
                                <div className="icon-contact">
                                    <IoLocationOutline className="icon" />
                                </div>
                                <div className="content-info">
                                    <h4>DIRECCIÓN</h4>
                                    <p>
                                        Calle Urban Style 123 <br />
                                        28001 Madrid, España
                                    </p>
                                </div>
                            </div>

                            <div className="info-contact">
                                <div className="icon-contact">
                                    <FiPhone className="icon" />
                                </div>
                                <div className="content-info">
                                    <h4>TELÉFONO</h4>
                                    <p>+34 91 123 45 67</p>
                                </div>
                            </div>

                            <div className="info-contact">
                                <div className="icon-contact">
                                    <MdOutlineEmail className="icon" />
                                </div>
                                <div className="content-info">
                                    <h4>EMAIL</h4>
                                    <p>info@urbanthreads.com</p>
                                </div>
                            </div>

                            <div className="info-contact">
                                <div className="icon-contact">
                                    <IoTimeOutline className="icon" />
                                </div>
                                <div className="content-info">
                                    <h4>HORARIO</h4>
                                    <p>
                                        Lun - Vie: 9:00 - 18:00 <br />
                                        Sáb: 10:00 - 14:00
                                    </p>
                                </div>
                            </div>
                        </section>
                    </aside>

                    {/* ASIDE DERECHO - FORMULARIO */}
                    <aside className="aside-mensaje">
                        <h3>ENVÍANOS UN MENSAJE</h3>
                        <div className="detall-aside">
                            <p>
                                <strong>Demo:</strong> Este es un formulario de demostración. Los
                                mensajes no se enviarán realmente.
                            </p>
                        </div>

                        <form className="form-contact">
                            <div className="info-form">
                                <div>
                                    <label htmlFor="Nombre">NOMBRE</label>
                                    <input type="text" id="Nombre" />
                                </div>

                                <div>
                                    <label htmlFor="Apellido">APELLIDO</label>
                                    <input type="text" id="Apellido" />
                                </div>
                            </div>

                            <div className="info-form">
                                <div>
                                    <label htmlFor="Email">EMAIL</label>
                                    <input
                                        type="email"
                                        id="Email"
                                        placeholder="tuemail@ejemplo.com"
                                    />
                                </div>
                            </div>
                            <div className="info-form">
                                <div>
                                    <label htmlFor="Asunto">ASUNTO</label>
                                    <select id="Asunto" name="Asunto">
                                        <option value="">Selecciona un asunto</option>
                                        <option value="pedido">Consulta general</option>
                                        <option value="producto">Información de producto</option>
                                        <option value="soporte">Estado de pedido</option>
                                        <option value="otro">Devolciones</option>
                                        <option value="otro">Otros</option>
                                    </select>
                                </div>
                            </div>

                            <div className="info-form">
                                <div>
                                    <label htmlFor="Mensaje">MENSAJE</label>
                                    <textarea
                                        id="Mensaje"
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit">ENVIAR MENSAJE</button>
                        </form>
                    </aside>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
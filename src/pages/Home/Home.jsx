import './Home.css'
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineElectricBolt } from "react-icons/md";
import { DiUnitySmall } from "react-icons/di";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>

            <section className='section-home'>
                <div className='home-items'>
                    <h2>
                        ESTILO URBANO <span>REDEFINIDO</span>
                    </h2>
                    <p>Descubre nuestra colección exclusiva de ropa urbana minimalista</p>
                    <button className='btn-home'> <Link className='Link' to="/product"> EXPLORAR COLECCIÓN</Link></button>
                </div>
            </section>

            <section className='section-items'>
                <div className='items-grid'>
                    {[
                        {
                            icon: <DiUnitySmall className='icon-section' />,
                            title: 'DISEÑO ÚNICO',
                            text: 'Piezas exclusivas con estética urbana y minimalista',
                        },
                        {
                            icon: <CiCircleCheck className='icon-section' />,
                            title: 'CALIDAD PREMIUM',
                            text: 'Materiales de alta calidad para máxima durabilidad',
                        },
                        {
                            icon: <MdOutlineElectricBolt className='icon-section' />,
                            title: 'ENVÍO RÁPIDO',
                            text: 'Entrega express en 24-48 horas',
                        },
                    ].map((item, i) => (
                        <div key={i} className='item-section'>
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default Home;
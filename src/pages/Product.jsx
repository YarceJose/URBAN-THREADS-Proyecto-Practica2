import './Product.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

import { LuStretchVertical } from "react-icons/lu";
import { PiPantsFill } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";

export default function SectionCard() {

    const productos = [
        { id: 1, title: 'Camiseta Básica Urban', detall: 'Algodón 100% orgánico', precio: 29, icon: <LuStretchVertical className="icon-producto" /> },
        { id: 2, title: 'Jeans Slim Fit', detall: 'Denim premium stretch', precio: 89, icon: <PiPantsFill className="icon-producto" /> },
        { id: 3, title: 'Sudadera Oversize', detall: 'Algodón French Terry', precio: 65, icon: <FaRegTrashAlt className="icon-producto" /> },
        { id: 4, title: 'Chaqueta Casual Urban', detall: 'Impermeable y ligera', precio: 120, icon: <RiGlobalLine className="icon-producto" /> },
        { id: 5, title: 'Gorra Snapback', detall: 'Bordado premium', precio: 35, icon: <IoMdTime className="icon-producto" /> },
        { id: 6, title: 'Zapatillas Urban', detall: 'Suela de goma antideslizante', precio: 95, icon: <LuStretchVertical className="icon-producto" /> },
    ];

    return (
        <>
           {/*  <Navbar /> */}

            <section className="section-cards">
                <header className="encabezado">
                    <h2>NUESTRA COLECCIÓN</h2>
                    <p>Estilo urbano para cada ocasión</p>
                </header>

                <div className="contenedor-cartas">
                    {productos.map((p) => (
                        <Cards
                            key={p.id}
                            title={p.title}
                            detall={p.detall}
                            precio={p.precio}
                            icon={p.icon}
                        />
                    ))}
                </div>
            </section>

           {/*  <Footer /> */}
        </>
    );
}
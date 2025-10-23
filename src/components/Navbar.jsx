import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-items">
                <div className="nav-logo">
                    <h1 className="nav-text">URBAN THREADS</h1>
                </div>
                <div className="nav-links">
                   <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/Product">Productos</Link>
                    <Link className="nav-link" to="/Contact">Contacto</Link> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
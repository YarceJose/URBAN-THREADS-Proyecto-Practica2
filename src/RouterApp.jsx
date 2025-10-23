// ✅ AppRouter.jsx
// --------------------------------------------------
// Este archivo define todas las rutas principales de tu sitio web
// usando react-router-dom versión 6 o superior.
//
// FUNCIONES CLAVE:
// - Controlar la navegación entre vistas (Home, Menu, Contact, Product).
// - Mantener el Navbar y el Footer visibles en todas las páginas.
// - Gestionar rutas inexistentes con una página 404.
//
// 📦 Dependencia requerida:
// Ejecuta en consola → npm install react-router-dom
// --------------------------------------------------

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🧩 Importamos las vistas o páginas principales
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";

// 🧱 Importamos componentes globales (barra de navegación y pie de página)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 🧭 Navbar: visible en todas las páginas */}
      <Navbar />

      {/* 🔀 Sistema de rutas */}
      <Routes>
        {/* 🏠 Página de inicio */}
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        {/* 🛍️ Página de productos (puede ser lista o detalle) */}
        <Route path="/product" element={<Product />} />

        {/* ⚠️ Página por defecto cuando la ruta no existe */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>404 - Página no encontrada</h1>
              <p>La ruta que intentas acceder no existe.</p>
            </div>
          }
        />
      </Routes>

      {/* ⚓ Footer: visible en todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

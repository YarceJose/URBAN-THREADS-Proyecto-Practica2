import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SectionCard from "./pages/Product";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SectionCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

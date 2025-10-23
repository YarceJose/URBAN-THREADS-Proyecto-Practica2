import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import SectionCard from "../pages/Product/Product";


let RouterApp = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Product",
    element: <SectionCard />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
];
export default RouterApp;
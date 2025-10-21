import Home from "../pages/Home";
import SectionCard from "../pages/Product";
import Contact from "../pages/Contact"

let routerApp = [
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
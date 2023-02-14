import Ayuda from "../pages/Ayuda";
import LandingPage from "../pages/LandingPage";

const PagesData = [
    {
        path: "/",
        element: <LandingPage />,
        title: "Landing Page"
    },
    {
        
        path: "/ayuda",
        element: <Ayuda />,
        title: "Ayuda"
    }
];

export default PagesData;
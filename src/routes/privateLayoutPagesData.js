import Accesiones from "../pages/Accesiones";
import TaxonomiaGeneros from "../pages/TaxonomiaGeneros";
import TaxonomiaFamilias from "../pages/TaxonomiaFamilias";
const PagesData = [
    {
        path: "/accesiones",
        element: <Accesiones />,
        title: "accesiones"
    },
    {
        path: "/taxonomia/generos",
        element: <TaxonomiaGeneros />,
        title: "taxonomia generos"
    },
    {
        path: "/taxonomia/familias",
        element: <TaxonomiaFamilias />,
        title: "taxonomia familias"
    }
];

export default PagesData;
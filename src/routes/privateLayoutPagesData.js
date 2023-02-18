import Accesiones from "../pages/Accesiones";
import TaxonomiaGeneros from "../pages/TaxonomiaGeneros";
import TaxonomiaFamilias from "../pages/TaxonomiaFamilias";
import TaxonomiaEspecies from "../pages/TaxonomiaEspecies";
import TaxonomiaSubespecies from "../pages/TaxonomiaSubespecies";
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
    },
    {
        path: "/taxonomia/especies",
        element: <TaxonomiaEspecies />,
        title: "taxonomia especies"
    },
    {
        path: "/taxonomia/subespecies",
        element: <TaxonomiaSubespecies />,
        title: "taxonomia subespecies"
    }
];

export default PagesData;
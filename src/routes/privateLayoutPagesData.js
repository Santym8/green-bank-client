import Accesiones from "../pages/Accesiones";
import Accesiones2 from "../pages/Accesiones/accesionesVentana2";
import Usuarios from "../pages/Usuarios";
import TaxonomiaGeneros from "../pages/TaxonomiaGeneros";
import TaxonomiaFamilias from "../pages/TaxonomiaFamilias";
import TaxonomiaEspecies from "../pages/TaxonomiaEspecies";
import TaxonomiaSubespecies from "../pages/TaxonomiaSubespecies";
import TaxonomiaNombresLocales from "../pages/TaxonomiaNombresLocales";
import Pasaporte from "../pages/Pasaportes";
const PagesData = [
    {
        path: "/accesiones/detalles",
        element: <Accesiones />,
        title: "accesiones"
    },
    {
        path: "/accesiones",
        element: <Accesiones />,
        title: "accesiones"
    },
    {
        path: "/accesiones/detalles/accesion",
        element: <Accesiones2 />,
        title: "accesiones"
    },
    {
        path: "/accesiones/detalles/accesion/pasaporte",
        element: <Pasaporte />,
        title: "pasaporte"
    },
    {
        path: "/usuarios",
        element: <Usuarios />,
        title: "Usuarios"
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
    },
    {
        path: "/taxonomia/nombres-locales",
        element: <TaxonomiaNombresLocales />,
        title: "taxonomia nombres locales"
    }
];

export default PagesData;
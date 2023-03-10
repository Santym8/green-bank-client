import Accesiones from "../pages/Accesiones";
import AccesionElejir from "../pages/Accesiones/accesionesVentana2";
import Usuarios from "../pages/Usuarios";
import TaxonomiaGeneros from "../pages/TaxonomiaGeneros";
import TaxonomiaFamilias from "../pages/TaxonomiaFamilias";
import TaxonomiaEspecies from "../pages/TaxonomiaEspecies";
import TaxonomiaSubespecies from "../pages/TaxonomiaSubespecies";
import TaxonomiaNombresLocales from "../pages/TaxonomiaNombresLocales";
import Pasaporte from "../pages/Pasaportes";
import FormularioRegistroAccesiones from "../pages/RegistroAccesiones";
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
        path: "/accesiones/detalles/accesion/:accesionId",
        element: <AccesionElejir />,
        title: "accesiones"
    },
    {
        path: "/accesiones/detalles/accesion/pasaporte/:accesionId",
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
    },
    {
      path: "/accesiones/registro",
      element: <FormularioRegistroAccesiones />,
      title: "registro accesiones",
    },
];

export default PagesData;

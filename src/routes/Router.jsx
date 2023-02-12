import { Route, Routes } from "react-router-dom";
import publicLayoutPagesData from './publicLayoutPagesData';
import privateLayoutPagesData from './privateLayoutPagesData';
import noLayoutPagesData from './noLayoutPagesData';
import { PublicLayout, PrivateLayout } from '../pages/layout';


const getPagesRoute = (pagesData) => {
    let pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });
    return pageRoutes;
};

const Router = () => {
    return (
        <Routes>
            {getPagesRoute(noLayoutPagesData)}

            <Route element={<PublicLayout />}>{getPagesRoute(publicLayoutPagesData)}</Route>
            <Route element={<PrivateLayout />}>{getPagesRoute(privateLayoutPagesData)}</Route>
        </Routes>
    );
};

export default Router;
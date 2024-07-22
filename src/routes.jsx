import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HistorySection from "./components/HistorySection";
import HistoryPage from "./pages/HistoryPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },{
        path: "/history",
        element: <HistoryPage/>
    }
]);

export default routes;
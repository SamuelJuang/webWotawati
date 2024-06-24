import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <>About</>
    }
]);

export default routes;
import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Status } from "./Pages/Status";
import { Timeline } from "./Pages/Timeline";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />,
            },
            {
                path: '/status',
                element: <Status />,
            }
        ]
    }

])
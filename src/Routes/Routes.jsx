import { createBrowserRouter } from "react-router";
import Roots from "../Componenets/Roots/Roots";
import Home from "../Paging/Home/Home";
import TimeLines from "../Paging/TimeLines/TimeLines";
import Status from "../Paging/Status/Status";

const router = createBrowserRouter([{

    path : "/",
    Component : Roots ,
    children : [
        {
            index : true,
            Component : Home
        },
        {
            path : "home",
            Component : Home
        },
        {
            path : "timelines",
            Component : TimeLines 
        },
        {
            path : "status",
            Component : Status
        }
    ]
}])



export default router;
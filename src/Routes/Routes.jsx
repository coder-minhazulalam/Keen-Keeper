import { createBrowserRouter } from "react-router";
import Roots from "../Componenets/Roots/Roots";
import Home from "../Paging/Home/Home";
import TimeLines from "../Paging/TimeLines/TimeLines";
import Status from "../Paging/Status/Status";
import ErrorRouting from "../ErrorRouting/ErrorRouting";
import EachCardDetails from "../Paging/Home/EachCardDetails";

const router = createBrowserRouter([{

    path : "/",
    Component : Roots ,
    children : [
        {
            index : true,
            Component : Home
        },
        {
            path : "/home",
            Component : Home,
            loader : () => fetch("/friends.json")
        },
        {
            path : "/timelines",
            Component : TimeLines 
        },
        {
            path : "/status",
            Component : Status
        },
        {
            path : "/carddetails/:id",
            Component : EachCardDetails,
            loader : () => fetch(`/friends.json`).then(res => res.json())
        }
    ] ,
    errorElement : <ErrorRouting/>,
    
}])



export default router;
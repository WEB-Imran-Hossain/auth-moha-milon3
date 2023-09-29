import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../homePage/Home";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
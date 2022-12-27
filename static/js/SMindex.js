import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import Sidebar from "./Sidebar"
import Nav from "./Nav";
import SMContext from "./shopManagerContext"
import SMCbulletin from "./SMCbulletin";
import "./css/SMindex.css";


ReactDOM.render(
    <React.StrictMode>
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Nav />
            <div className="mainContext flex-1">
                <Sidebar />
                <SMContext/>
                <SMCbulletin/>
            </div>
        </div>
    </React.StrictMode>,
document.querySelector("#root"));
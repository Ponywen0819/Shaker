import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import ToolBar from "./Toolbar";

class Main extends React.Component{
    render(){
        let main=(
            <ToolBar></ToolBar>
        )
        return main
    }
}

createRoot(document.getElementById("main")).render(<Main></Main>)
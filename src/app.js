import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./Components/templates/Body";
import "./index.css";

const container = document.getElementById( "app" );
const root = createRoot( container );
root.render( <Body title={"Harumaki"}/> );

// "https://qiita.com/api/v2/items"

import React from "react";
import ReactDOMClient from "react-dom/client";
import { Guest } from "./screens/Guest";
import TaskList from "./screens/Guest/TaskList";


const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Guest />, <TaskList/>);

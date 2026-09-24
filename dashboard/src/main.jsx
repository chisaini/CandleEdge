import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Routes>
        <Route path="/*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
);

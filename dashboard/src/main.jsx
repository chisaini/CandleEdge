import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(<Home />);

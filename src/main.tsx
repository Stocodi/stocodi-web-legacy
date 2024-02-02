import "reflect-metadata";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { container } from "tsyringe";
import Api from "./api/config/api.ts";

container.register("Api", { useClass: Api });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);

import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { MainLayout } from "./layouts/MainLayout";

import HomePage from "./pages/home-page/HomePage";

import "@/styles/globals.scss";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Provider>
    );
}

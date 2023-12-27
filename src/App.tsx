import "@/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";

import HomePage from "./pages/home-page/HomePage";
import SigninPage from "./pages/auth-page/SigninPage";
import SignupPage from "./pages/auth-page/SignupPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />

                    <Route path="*" element={<PageNotFound />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="signin" element={<SigninPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
            </Routes>
        </Provider>
    );
}

import "@/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";

import HomePage from "./pages/home-page/HomePage";
import SigninPage from "./pages/auth-page/SigninPage";
import SignupPage from "./pages/auth-page/SignupPage";

import LecturePage from "./pages/lecture-page/LecturePage";
import LectureSearchResultPage from "./pages/lecture-page/LectureSearchResultPage";
import LectureViewPage from "./pages/lecture-page/LectureViewPage";
import LectureUploadPage from "./pages/lecture-page/LectureUploadPage";

import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />

                    <Route path="lectures" element={<LecturePage />} />
                    <Route path="lectures/search" element={<LectureSearchResultPage />} />
                    <Route path="lectures/view" element={<LectureViewPage />} />
                    <Route path="lectures/upload" element={<LectureUploadPage />} />

                    <Route path="*" element={<PageNotFound />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="signin" element={<SigninPage />} />
                    <Route path="signup/step1" element={<SignupPage.One />} />
                    <Route path="signup/step2" element={<SignupPage.Two />} />
                    <Route path="signup/step3" element={<SignupPage.Three />} />
                </Route>
            </Routes>
        </Provider>
    );
}

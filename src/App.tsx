import "@/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CookiesProvider } from "react-cookie";

import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { TestLayout } from "./layouts/TestLayout";

import AboutPage from "./pages/about-page/AboutPage";
import SigninPage from "./pages/auth-page/SigninPage";
import SignupPage from "./pages/auth-page/SignupPage";

import LecturePage from "./pages/lecture-page/LecturePage";
import LectureSearchResultPage from "./pages/lecture-page/LectureSearchResultPage";
import LectureViewPage from "./pages/lecture-page/LectureViewPage";
import LectureUploadPage from "./pages/lecture-page/LectureUploadPage";

import PageNotFound from "./pages/PageNotFound";
import TestPage from "./pages/test-page/TestPage";
import QuestionPage from "./pages/test-page/QuestionPage";
import ResultPage from "./pages/test-page/ResultPage";

export default function App() {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<LecturePage />} />
                        <Route path="lectures/search" element={<LectureSearchResultPage />} />
                        <Route path="lectures/view/:id" element={<LectureViewPage />} />
                        <Route path="lectures/upload" element={<LectureUploadPage />} />

                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>

                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="signin" element={<SigninPage />} />
                        <Route path="signup/step1" element={<SignupPage.One />} />
                        <Route path="signup/step2" element={<SignupPage.Two />} />
                        <Route path="signup/step3" element={<SignupPage.Three />} />
                    </Route>

                    <Route path="/test" element={<TestLayout />}>
                        <Route index element={<TestPage />} />
                        <Route path="question" element={<QuestionPage />} />
                        <Route path="result" element={<ResultPage />}></Route>
                    </Route>
                </Routes>
            </Provider>
        </CookiesProvider>
    );
}

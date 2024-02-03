import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthLayout } from "./components/layouts/AuthLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { TestLayout } from "./components/layouts/TestLayout";

import PageNotFound from "./pages/PageNotFound";
import ServiceNotAvailablePage from "./pages/ServiceNotAvailable";
import AboutPage from "./pages/about-page/AboutPage";
import SigninPage from "./pages/auth-page/SigninPage";
import SignupPage from "./pages/auth-page/SignupPage";
import LecturePage from "./pages/lecture-page/LecturePage";
import LectureSearchResultPage from "./pages/lecture-page/LectureSearchResultPage";
import LectureUploadPage from "./pages/lecture-page/LectureUploadPage";
import LectureViewPage from "./pages/lecture-page/LectureViewPage";
import QuestionPage from "./pages/test-page/QuestionPage";
import ResultCommentPage from "./pages/test-page/ResultCommentPage";
import ResultDetailPage from "./pages/test-page/ResultDetailPage";
import ResultPage from "./pages/test-page/ResultPage";
import TestPage from "./pages/test-page/TestPage";

import { store } from "./store/store";

import "@/styles/globals.scss";

const queryClient = new QueryClient();

export default function App() {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <CookiesProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<LecturePage />} />
                            <Route path="lectures/search" element={<LectureSearchResultPage />} />
                            <Route path="lectures/view/:id" element={<LectureViewPage />} />
                            <Route path="lectures/upload" element={<LectureUploadPage />} />

                            <Route path="/experiment" element={<ServiceNotAvailablePage />} />
                            <Route path="/community" element={<ServiceNotAvailablePage />} />
                            <Route path="/mypage/*" element={<ServiceNotAvailablePage />} />
                            <Route path="/column" element={<ServiceNotAvailablePage />} />

                            <Route path="/about" element={<AboutPage />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>

                        <Route path="/auth" element={<AuthLayout />}>
                            <Route path="signin" element={<SigninPage />} />
                            <Route path="signup" element={<SignupPage />} />
                        </Route>

                        <Route path="/test" element={<TestLayout />}>
                            <Route index element={<TestPage />} />
                            <Route path="question" element={<QuestionPage />} />
                            <Route path="result" element={<ResultPage />}></Route>
                            <Route path="result/detail" element={<ResultDetailPage />} />
                            <Route path="result/comment" element={<ResultCommentPage />} />
                        </Route>
                    </Routes>
                </Provider>
            </QueryClientProvider>
        </CookiesProvider>
    );
}

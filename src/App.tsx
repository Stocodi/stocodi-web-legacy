import React, { Suspense, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Loader } from "./components/feedback/Loader";
import { AuthLayout } from "./components/layouts/AuthLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { TestLayout } from "./components/layouts/TestLayout";

import LecturePage from "./pages/lecture-page/LecturePage";
import LectureSearchResultPage from "./pages/lecture-page/LectureSearchResultPage";
import LectureUploadPage from "./pages/lecture-page/LectureUploadPage";
import LectureViewPage from "./pages/lecture-page/LectureViewPage";

import { store } from "./store/store";

import "@/styles/globals.scss";

const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const ServiceNotAvailablePage = React.lazy(() => import("./pages/ServiceNotAvailable"));
const SigninPage = React.lazy(() => import("./pages/auth-page/SigninPage"));
const SignupPage = React.lazy(() => import("./pages/auth-page/SignupPage"));
const QuestionPage = React.lazy(() => import("./pages/test-page/QuestionPage"));
const ResultCommentPage = React.lazy(() => import("./pages/test-page/ResultCommentPage"));
const ResultDetailPage = React.lazy(() => import("./pages/test-page/ResultDetailPage"));
const ResultPage = React.lazy(() => import("./pages/test-page/ResultPage"));
const AboutPage = React.lazy(() => import("./pages/about-page/AboutPage"));
const TestPage = React.lazy(() => import("./pages/test-page/TestPage"));

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
                    <Suspense fallback={<Loader />}>
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
                    </Suspense>
                </Provider>
            </QueryClientProvider>
        </CookiesProvider>
    );
}

import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/"></Route>
            </Routes>
        </Provider>
    );
}

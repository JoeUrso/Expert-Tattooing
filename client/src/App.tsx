import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Header />
                <h1>HELLOO</h1>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

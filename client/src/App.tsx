import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Header />
                <h1>HELLOO</h1>
                {/* <Routes> */}
                {/* <Route path="/details/:id" element={<Details />} /> */}
                {/* <Route path="/" element={<HomePage />} /> */}
                {/* </Routes> */}
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

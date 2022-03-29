import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                {/* <header>
                        <Link to="/">Adopt Me!</Link>
                    </header> */}
                <Routes>
                    {/* <Route path="/details/:id" element={<Details />} /> */}
                    {/* <Route path="/" element={<HomePage />} /> */}
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

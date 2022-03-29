import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";

const App = () => {
    // const theme = useState("darkblue");
    return (
        <StrictMode>
            {/* <ThemeContext.Provider value={theme}> */}
            <BrowserRouter>
                {/* <header>
                        <Link to="/">Adopt Me!</Link>
                    </header> */}
                <Routes>
                    {/* <Route path="/details/:id" element={<Details />} /> */}
                    {/* <Route path="/" element={<HomePage />} /> */}
                </Routes>
            </BrowserRouter>
            {/* </ThemeContext.Provider> */}
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

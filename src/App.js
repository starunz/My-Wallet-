
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SignUp from "./pages/signUp/SignUp";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
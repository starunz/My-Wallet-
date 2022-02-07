import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp, SignIn } from "./pages";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
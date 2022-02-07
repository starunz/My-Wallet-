import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, SignIn, Wallet, AddEntry } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='wallet' element={<Wallet />} />
                    <Route path='add-entry' element={<AddEntry />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
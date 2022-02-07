import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, SignIn, Wallet, AddEntry, AddExit} from "./pages";
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
                    <Route path='add-exit' element={<AddExit />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
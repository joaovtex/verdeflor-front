import { BrowserRouter, Routes, Route } from "react-router-dom";

import LangingPage from "./pages/landingpage";
import Login from "./pages/login";

export default function Nav() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LangingPage/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>

    );
}
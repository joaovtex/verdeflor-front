import { BrowserRouter, Routes, Route } from "react-router-dom";

import LangingPage from "./pages/landingpage";
import Login from "./pages/login";
import Teste from "./pages/Teste";
import Menu from "./pages/menu/";
import RotasProtegidas from "./rotasprotegidas.jsx";

export default function Nav() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LangingPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/teste" element={<RotasProtegidas><Teste/></RotasProtegidas>}/>
                <Route path="/menu" element={<RotasProtegidas><Menu/></RotasProtegidas>} />
            </Routes>
        </BrowserRouter>

    );
}
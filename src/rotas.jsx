import { BrowserRouter, Routes, Route } from "react-router-dom";
import RotasProtegidas from "./rotasprotegidas.jsx";
import LangingPage from "./pages/landingpage";
import Login from "./pages/login";
import Teste from "./pages/Teste";
import Menu from "./pages/menu/";
import NovoColaborador from "./pages/novoColaborador";
import ListarColaboradores from "./pages/listarColaboradores";
import NovoServico from "./pages/novoServico";
import ListarServicos from "./pages/listarServicos";
import EditarColaborador from "./pages/editarColaborador";
import EditarServico from "./pages/editarServico";
import FuncionariosAlocados from "./pages/funcionariosAlocados/index.jsx";


export default function Nav() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LangingPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/teste" element={<RotasProtegidas><Teste/></RotasProtegidas>}/>
                <Route path="/menu" element={<RotasProtegidas><Menu/></RotasProtegidas>} />
                <Route path="/novoColaborador" element={<RotasProtegidas><NovoColaborador/></RotasProtegidas>}/>
                <Route path="/editarcolaborador/:id" element={<RotasProtegidas><EditarColaborador/></RotasProtegidas>}/>
                <Route path="/colaboradores" element={<RotasProtegidas><ListarColaboradores/></RotasProtegidas>}/>
                <Route path="/novoServico" element={<RotasProtegidas><NovoServico/></RotasProtegidas>}/>
                <Route path="/listarServicos" element={<RotasProtegidas><ListarServicos/></RotasProtegidas>}/>
                <Route path="/editarServico/:id" element={<RotasProtegidas><EditarServico/></RotasProtegidas>}/>
                <Route path="/funcionariosAlocados" element={<RotasProtegidas><FuncionariosAlocados/></RotasProtegidas>}/>
            </Routes>
        </BrowserRouter>

    );
}
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Login from './Pages/Login'
import Cadastro from "./Pages/Cadastro";
import BancoInicial from "./Pages/BancoInicial"

function AppRoutes(params) {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Login/>}>
            </Route>
            <Route path = "/Cadastro" element = {<Cadastro/>}>
            </Route>
            <Route path = "/BancoInicial" element = {<BancoInicial/>}>
            </Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default AppRoutes
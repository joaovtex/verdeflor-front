import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

{/* implementar lógica */ }
export default function ListarServicos() {
    const navigate = useNavigate();

    return (

        <div className='pagina-listarServicos'>
            <HeaderMenus />
            <div className='corpo'>

                <div className='voltarTitulo'>
                <img src="/assets/images/botao-voltar.png" onClick={() => navigate("/menu")} />
                <h2>Serviços</h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CPF / CNPJ</th>
                            <th>Endereço</th>
                            <th>Serviço</th>
                            <th>Preço</th>
                            <th>Data de Contratação</th>
                            <th>Funcionário</th>
                            <th>Em Andamento</th>
                            <th>   </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* abaixo coloquei o link mas ainda precisa da lógica do ID */}
                            <td><Link to={`/editarServico/`}><img src="/assets/images/editar.png" /></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FooterMenus />
        </div>
    )
}
import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { Link } from 'react-router-dom';

{/* implementar lógica */}
export default function ListarServicos() {
    return (

        <div className='pagina-listarServicos'>
            <HeaderMenus />
            <div className='corpo'>
                <h2>Serviços</h2>

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
                            <td><Link to={`/editarServico/`}><img src="/assets/images/editar.png"/></Link></td>
                            <td><img src="/assets/images/excluir.png"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FooterMenus />
        </div>
    )
}
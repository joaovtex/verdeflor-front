import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { Link } from 'react-router-dom';

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
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FooterMenus />
        </div>
    )
}
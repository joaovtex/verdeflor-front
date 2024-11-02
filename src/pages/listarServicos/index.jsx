import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/constants';

{/* implementar lógica */ }
export default function ListarServicos() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        let token = localStorage.getItem('TOKEN')

        let resp = await axios.get(`${API_URL}/listar/servicos-prestados`, {
            headers: { 'x-access-token': token }
        })

        let listaOrdenada = resp.data.sort((a, b) => b.ID - a.ID);
        setLista(listaOrdenada);
    }

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
                            <th>Nome Completo</th>
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
                        {lista.map(item =>
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.NomeCliente}</td>
                                <td>{item.CPF_CNPJ}</td>
                                <td>{item.Endereco}</td>
                                <td>{item.TipoServico}</td>
                                <td>{item.Orcamento}</td>
                                <td>{new Date(item.DataContratacao).toLocaleDateString('pt-BR')}</td>
                                <td>{item.IdFuncionario}</td>
                                <td>{item.Ativo}</td>
                                <td onClick={() => navigate(`/editarServico/${item.ID}`)}><img src="/assets/images/editar.png" /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <FooterMenus />
        </div>
    )
}
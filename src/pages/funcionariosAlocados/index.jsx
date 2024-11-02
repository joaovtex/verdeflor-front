import './index.scss'
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function FuncionariosAlocados() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        let token = localStorage.getItem('TOKEN')

        let resp = await axios.get(`${API_URL}/listar/funcionarios-alocados`, {
            headers: { 'x-access-token': token }
        })

        let listaOrdenada = resp.data.sort((a, b) => b.ID - a.ID);
        setLista(listaOrdenada);
    }

    return (

        <div className='pagina-funcionariosAlocados'>
            <HeaderMenus />

            <div className='corpo'>
                <div className='voltarTitulo'>
                    <img src="/assets/images/botao-voltar.png" onClick={() => navigate(-1)} />
                    <h2>IDs de Serviços e Funcionários Alocados</h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID do Serviço</th>
                            <th>ID do Funcionário</th>
                            <th>Nome do Funcionário</th>
                        </tr>
                    </thead>

                    <tbody>
                        {lista.map(item =>
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.IdFuncionario}</td>
                                <td>{item.NomeFuncionario}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

            <FooterMenus />
        </div>

    );
}
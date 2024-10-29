import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import { useNavigate } from 'react-router-dom';

export default function ListarColaboradores() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        let token = localStorage.getItem('TOKEN')

        let resp = await axios.get('http://localhost:3010/buscar/funcionarios', {
            headers: { 'x-access-token': token }
        })

        let listaOrdenada = resp.data.sort((a, b) => b.ID - a.ID);
        setLista(listaOrdenada);
    }

    async function excluir(id) {
        const confirmaDel = window.confirm(`Tem certeza que deseja exluir funcionário de id ${id}?`)

        if (confirmaDel) {
            let body = {
                "id": id
            }
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.delete('http://localhost:3010/excluir/funcionario', {
                headers: { 'x-access-token': token },
                data: body
            });

            buscar()
        } else {
            alert("Exclusão cancelada.")
        }

    }
    return (

        <div className='pagina-listarColaboradores'>
            <HeaderMenus />
            <div className='corpo'>
                <div className='voltarTitulo'>
                    <img src="/assets/images/botao-voltar.png" onClick={() => navigate(-1)}/>
                    <h2>Colaboradores</h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Cargo</th>
                            <th>Jornada</th>
                            <th>Salário</th>
                            <th>Data de Admissão</th>
                            <th>Ativo</th>
                            <th>   </th>
                            <th>   </th>
                        </tr>
                    </thead>

                    <tbody>
                        {lista.map(item =>
                            <tr>
                                <td>{item.ID}</td>
                                <td>{item.Nome}</td>
                                <td>{item.CPF}</td>
                                <td>{item.Telefone}</td>
                                <td>{item.Cargo}</td>
                                <td>{item.Jornada}</td>
                                <td>{item.Salário}</td>
                                <td>{new Date(item.DataAdmissão).toLocaleDateString('pt-BR')}</td>
                                <td>{item.Ativo}</td>
                                <td onClick={() => navigate(`/editarcolaborador/${item.ID}`)}><img src="/assets/images/editar.png" /></td>
                                <td><img onClick={() => excluir(item.ID)} src="/assets/images/excluir.png" /></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

            <FooterMenus />
        </div>

    );
}
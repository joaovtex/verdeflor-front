import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/constants.js'

export default function ListarColaboradores() {
    const navigate = useNavigate()
    const [lista, setLista] = useState([])

    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/buscar/funcionarios`,
                { headers: { 'x-access-token': token } }
            )

            let listaOrdenada = resp.data.sort((a, b) => b.ID - a.ID)

            setLista(listaOrdenada)
        } catch (error) {
            alert('Erro ao buscar colaboradores: ' + error.response.data.erro)
        }
    }

    async function excluir(id) {
        try {
            const confirmaDel = window.confirm(`Tem certeza que deseja exluir funcionário de id ${id}?`)

            if (confirmaDel) {
                let body = {
                    "id": id
                }

                let token = localStorage.getItem('TOKEN')

                let resp = await axios.delete(`${API_URL}/excluir/funcionario`,
                    {
                        data: body,
                        headers: { 'x-access-token': token },
                    }
                )

                buscar()
            } else {
                alert("Exclusão cancelada.")
            }
        } catch (error) {
            alert('Erro ao excluir: ' + error.response.data.erro)
        }
    }

    return (

        <div className='pagina-listarColaboradores'>

            <HeaderMenus />

            <div className='corpo'>
                <div className='voltarTitulo'>
                    <img
                        src="/assets/images/botao-voltar.png"
                        onClick={() => navigate(-1)}
                    />
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
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.Nome}</td>
                                <td>{item.CPF}</td>
                                <td>{item.Telefone}</td>
                                <td>{item.Cargo}</td>
                                <td>{item.Jornada}</td>
                                <td>R$ {item.Salário}</td>
                                <td>{new Date(item.DataAdmissao).toLocaleDateString('pt-BR')}</td>
                                <td>{item.Ativo ? 'Sim' : 'Não'}</td>
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
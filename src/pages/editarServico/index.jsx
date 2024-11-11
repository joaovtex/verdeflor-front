import './index.scss'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import Salvar from '../../components/botoes/salvar'
import Descartar from '../../components/botoes/descartar'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../api/constants'
import { NumericFormat } from 'react-number-format'
import toast, { Toaster } from 'react-hot-toast'

export default function EditarServico() {
    const navigate = useNavigate()
    const [nomeCliente, setNomeCliente] = useState('')
    const [documentoCliente, setDocumentoCliente] = useState('')
    const [endereco, setEndereco] = useState('')
    const [tipoServico, setTipoServico] = useState('Jardinagem')
    const [orcamento, setOrcamento] = useState('')
    const [contratacao, setContratacao] = useState('')
    const [funcionario, setFuncionario] = useState(' ')
    const [estaAtivo, setEstaAtivo] = useState(false)
    const [lista, setLista] = useState([])

    const { id } = useParams()

    useEffect(() => {
        buscarPorId()
        buscar()
    }, []);

    async function buscarPorId() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/buscar/servico-prestado/${id}`,
                {
                    headers: { 'x-access-token': token }
                }
            )

            setNomeCliente(resp.data.NomeCliente)
            setDocumentoCliente(resp.data.CPF_CNPJ)
            setEndereco(resp.data.Endereco)
            setTipoServico(resp.data.TipoServico)
            setOrcamento(resp.data.Orcamento)
            setContratacao(new Date(resp.data.DataContratacao).toISOString().split('T')[0])
            setFuncionario(resp.data.IdFuncionario)
            setEstaAtivo(resp.data.Ativo)

        } catch (error) {
            console.error("Erro: " + error)
        }
    }

    async function buscar() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/buscar/funcionarios`, {
                headers: { 'x-access-token': token }
            })

            setLista(resp.data)

        } catch (error) {
            alert("Erro ao buscar funcionários: ", error)
        }
    }

    async function salvarServico() {
        try {
            let body = {
                "nomeCliente": nomeCliente,
                "documentoCliente": documentoCliente,
                "endereco": endereco,
                "tipoServico": tipoServico,
                "orcamento": orcamento,
                "dtContratacao": contratacao,
                "idFuncionario": funcionario,
                "estaAtivo": estaAtivo
            }

            let token = localStorage.getItem('TOKEN');

            let resp = await axios.put(`${API_URL}/editar/servico-prestado/${id}`,
                body,
                {
                    headers: { 'x-access-token': token }
                }
            )

            toast.success(`Servico alterado!`)

            setTimeout(() => {
                navigate(-1)
            }, 2000)
        } catch (error) {
            toast.error(error.response.data.erro)
        }
    }

    return (

        <div className='pagina-editarServico'>

            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <h2>Alteração de Dados do Serviço</h2>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>

                            <input
                                type='text'
                                value={nomeCliente}
                                onChange={e => setNomeCliente(e.target.value)}
                            />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Endereço</label>

                                <label>Serviço</label>
                            </div>

                            <div className='input-grid'>
                                <input
                                    type='text'
                                    value={endereco}
                                    onChange={e => setEndereco(e.target.value)}
                                />

                                <select
                                    value={tipoServico}
                                    onChange={e => setTipoServico(e.target.value)}
                                >
                                    <option value="Jardinagem">Jardinagem</option>
                                    <option value="Instalação de Irrigação">Instalação de Irrigação</option>
                                    <option value="Agronomia">Agronomia</option>
                                </select>
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Preço</label>

                                <label>Data de Contração</label>
                            </div>

                            <div className='input-grid'>
                                <NumericFormat
                                    value={orcamento}
                                    onValueChange={(values) => setOrcamento(values.value)}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    displayType="input"
                                />

                                <input
                                    type='date'
                                    value={contratacao}
                                    onChange={e => setContratacao(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>ID Funcionário Alocado</label>

                                <label>Em Andamento</label>
                            </div>

                            <div className='input-grid'>
                                <select
                                    className='IDFuncionario'
                                    value={funcionario}
                                    onChange={e => setFuncionario(e.target.value)}
                                >
                                    {lista.map(item =>
                                        <option key={item.ID} value={item.ID}>{item.ID}</option>
                                    )}
                                </select>

                                <div className='input-gridRadio'>
                                    <input
                                        type="checkbox"
                                        checked={estaAtivo} onChange={e => setEstaAtivo(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botoes'>
                    <div onClick={salvarServico}>
                        <Salvar />
                    </div>
                    <div onClick={() => navigate(-1)}>
                        <Descartar />
                    </div>
                </div>


            </div>

            <FooterMenus />

            <Toaster />

        </div>
    );
}
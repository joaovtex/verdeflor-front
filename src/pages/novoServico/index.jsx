import './index.scss'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import Salvar from '../../components/botoes/salvar'
import Descartar from '../../components/botoes/descartar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/constants'
import InputMask from 'react-input-mask'
import { NumericFormat } from 'react-number-format'

export default function NovoServico() {
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
    const [tipoCliente, setTipoCliente] = useState('PF')

    useEffect(() => {
        buscar()
    }, []);

    async function buscar() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/buscar/funcionarios`, {
                headers: { 'x-access-token': token }
            })

            setLista(resp.data)

            if (resp.data.length > 0) {
                setFuncionario(resp.data[0].ID);
            }
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error)
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

            let token = localStorage.getItem('TOKEN')

            let resp = await axios.post(`${API_URL}/cadastrar/servico-prestado`, body, {
                headers: { 'x-access-token': token }
            })

            alert('Novo registro inserido: ' + resp.data.id)
            navigate(-1)
        } catch (error) {
            alert('Erro ao salvar cliente: ' + error.response.data.erro)
        }
    }

    function tipoMascara() {
        return tipoCliente === "PF" ? "999.999.999-99" : "99.999.999/9999-99";
    }

    return (

        <div className='pagina-servico'>

            <HeaderMenus />

            <div className='corpo'>
                <div className='cadastro'>
                    <h2>Por favor preencha as informações abaixo</h2>

                    <div className='tipoCliente'>
                        <p>Informe o tipo de cliente: </p>
                        <select onChange={e => setTipoCliente(e.target.value)} value={tipoCliente}>
                            <option value="PF">Pessoa Física</option>
                            <option value="PJ">Pessoa Jurídica</option>
                        </select>
                    </div>

                    <div className='formulario'>
                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>
                            <input
                                type='text'
                                onChange={e => setNomeCliente(e.target.value)}
                            />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF ou CNPJ</label>
                                <label>Endereço</label>
                            </div>

                            <div className='input-grid'>
                                <InputMask
                                    mask={tipoMascara()}
                                    onChange={e => setDocumentoCliente(e.target.value)}
                                >
                                    {(inputProps) => <input {...inputProps} type="text" />}
                                </InputMask>

                                <input
                                    type='text'
                                    onChange={e => setEndereco(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Serviço</label>
                                <label>Preço</label>
                            </div>

                            <div className='input-grid'>
                                <select
                                    className='servico'
                                    onChange={e => setTipoServico(e.target.value)}
                                >
                                    <option value="Jardinagem">Jardinagem</option>
                                    <option value="Instalação de Irrigação">Instalação de Irrigação</option>
                                    <option value="Agronomia">Agronomia</option>
                                </select>

                                <NumericFormat
                                    onValueChange={(values) => setOrcamento(values.value)}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    displayType="input"
                                />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Data de Contratação</label>
                                <label>ID do Funcionário</label>
                            </div>

                            <div className='input-grid'>
                                <input
                                    type='date'
                                    onChange={e => setContratacao(e.target.value)}
                                />

                                <select
                                    className='funcionario'
                                    onChange={e => setFuncionario(e.target.value)}
                                >
                                    {lista.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.ID}
                                        >
                                            {item.ID}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='campo'>
                            <label>Em Andamento</label>
                        </div>
                        <div className='botao-atv'>
                            <input
                                type="checkbox"
                                checked={estaAtivo}
                                onChange={e => setEstaAtivo(e.target.checked)}
                            />
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

        </div>

    );
    
}

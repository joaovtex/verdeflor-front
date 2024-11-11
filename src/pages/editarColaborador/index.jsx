import './index.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import Salvar from '../../components/botoes/salvar'
import Descartar from '../../components/botoes/descartar'
import { API_URL } from '../../api/constants'
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import toast, { Toaster } from 'react-hot-toast'

export default function EditarColaborador() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cargo, setCargo] = useState('')
    const [jornada, setJornada] = useState('')
    const [salario, setSalario] = useState('')
    const [dataAdmissao, setDataAdmissao] = useState('')
    const [estaAtivo, setEstaAtivo] = useState()

    const { id } = useParams()

    useEffect(() => {
        buscarPorId()
    }, []);

    async function buscarPorId() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/buscar/funcionario/${id}`,
                {
                    headers: { 'x-access-token': token }
                }
            )

            setNome(resp.data.Nome)
            setCpf(resp.data.CPF)
            setTelefone(resp.data.Telefone)
            setCargo(resp.data.Cargo)
            setJornada(resp.data.Jornada)
            setSalario(resp.data.Salário)
            setDataAdmissao(new Date(resp.data.DataAdmissao).toISOString().split('T')[0])
            setEstaAtivo(resp.data.Ativo)
        } catch (error) {
            alert("Erro ao buscar colaborador: " + error.response.data.erro)
        }
    }

    async function salvarColaborador() {
        try {
            let body = {
                "nome": nome,
                "cpf": cpf,
                "telefone": telefone,
                "cargo": cargo,
                "jornada": jornada,
                "salario": salario,
                "dtAdmissao": dataAdmissao,
                "estaAtivo": estaAtivo
            }

            let token = localStorage.getItem('TOKEN')

            let resp = await axios.put(`${API_URL}/editar/funcionario/${id}`,
                body,
                {
                    headers: { 'x-access-token': token }
                }
            )

            toast.success(`Colaborador alterado!`)

            setTimeout(() => {
                navigate(-1)
            }, 2000)
        } catch (error) {
            toast.error(error.response.data.erro)
        }
    }

    return (

        <div className='pagina-editarFuncionario'>

            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <h2>Atualização de Funcionário</h2>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Funcionário</label>

                            <input
                                type='text'
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF</label>

                                <label>Telefone</label>
                            </div>

                            <div className='input-grid'>
                                <InputMask
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                >
                                    {(inputProps) => <input {...inputProps} type="text" />}
                                </InputMask>

                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                >
                                    {(inputProps) => <input {...inputProps} type='text' />}
                                </InputMask>
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Cargo</label>

                                <label>Jornada</label>
                            </div>

                            <div className='input-grid'>
                                <select
                                    value={cargo}
                                    onChange={e => setCargo(e.target.value)}
                                >
                                    <option value="Jardineiro">Jardineiro</option>
                                    <option value="Téc. de Irrigação">Téc. de Irrigação</option>
                                    <option value="Agrônomo">Agrônomo</option>
                                </select>

                                <select
                                    value={jornada}
                                    onChange={e => setJornada(e.target.value)}
                                >
                                    <option value="5x2">5x2</option>
                                    <option value="6x1">6x1</option>
                                </select>
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Salário</label>

                                <label>Data de Admissão</label>
                            </div>

                            <div className='input-grid'>
                                <NumericFormat
                                    value={salario}
                                    onValueChange={(values) => setSalario(values.value)}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    displayType="input"
                                />

                                <input
                                    type='date'
                                    value={dataAdmissao}
                                    onChange={e => setDataAdmissao(new Date(e.target.value).toISOString().split('T')[0])}
                                />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Ativo</label>
                            </div>

                            <div className='input-radios'>
                                <input
                                    type="checkbox"
                                    checked={estaAtivo}
                                    onChange={e => setEstaAtivo(e.target.checked)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botoes'>
                    <div onClick={salvarColaborador}>
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
import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import Salvar from '../../components/botoes/salvar'
import Descartar from '../../components/botoes/descartar'
import { API_URL } from '../../api/constants.js'
import InputMask from 'react-input-mask'
import { NumericFormat } from 'react-number-format'
import toast, { Toaster } from 'react-hot-toast'

export default function NovoColaborador() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cargo, setCargo] = useState('Jardineiro')
    const [jornada, setJornada] = useState('5x2')
    const [salario, setSalario] = useState('')
    const [dataAdmissao, setDataAdmissao] = useState('')

    async function salvarColaborador() {
        try {
            let body = {
                "nome": nome,
                "cpf": cpf,
                "telefone": telefone,
                "cargo": cargo,
                "jornada": jornada,
                "salario": salario,
                "dtAdmissao": dataAdmissao
            }

            let token = localStorage.getItem('TOKEN')

            let resp = await axios.post(`${API_URL}/cadastrar/funcionario`, body, {
                headers: {
                    'x-access-token': token
                }
            })

            toast.success(`Novo colaborador inserido ao quadro de funcionários!`);

            setTimeout(() => {
                navigate(-1)
            }, 2000)

        } catch (error) {
            toast.error(error.response?.data?.erro)
        }
    }


    return (
        <div className='pagina-cadastro'>

            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <h2>Por favor preencha as informações abaixo</h2>

                    <div className='formulario'>
                        <div className='campo'>
                            <label>Nome Completo do Funcionário</label>

                            <input
                                type='text'
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
                                    onChange={e => setCpf(e.target.value)}
                                >
                                    {(inputProps) => <input {...inputProps} type="text" />}
                                </InputMask>

                                <InputMask
                                    mask="(99) 99999-9999"
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
                                    onChange={e => setCargo(e.target.value)}
                                >
                                    <option value="Jardineiro">Jardineiro</option>
                                    <option value="Téc. de Irrigação">Téc. de Irrigação</option>
                                    <option value="Agrônomo">Agrônomo</option>
                                </select>

                                <select
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
                                    onChange={e => setDataAdmissao(e.target.value)}
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

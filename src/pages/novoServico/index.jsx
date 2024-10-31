import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// nessa tela falta a lógica dos botões de ativo ou não + o select dos id´s dos funcionários

export default function NovoServico() {
    const navigate = useNavigate();
    const [nome_cliente, setNome] = useState('');
    const [documento_cliente, setDocumento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipo_servico, setServico] = useState('');
    const [orcamento, setOrcamento] = useState('');
    const [contratacao, setContratacao] = useState('');
    const [funcionario, setFuncionario] = useState('1');
    const [estaAtivo, setEstaAtivo] = useState();

    const { id } = useParams();

    async function salvarServico() {
        let body = {
            "nome_cliente": nome_cliente,
            "documento_cliente": documento_cliente,
            "endereco": endereco,
            "tipo_servico": tipo_servico,
            "orcamento": orcamento,
            "dt_contratacao": contratacao,
            "id_funcionario": funcionario,
            "ativo": estaAtivo
        }

        let token = localStorage.getItem("token");

        try {
            let resp = await axios.post("http://localhost:3010/cadastrar/prestaca0-de-servico", body,
                { headers: { 'x-access-token': token } });
            alert('Novo registro inserido: ' + resp.data.id);
            navigate('/menu')
        } catch (error) {
            alert('Erro ao salvar colaborador: ' + error.response.data.erro);
        }
    }

    return (
        <div className='pagina-servico'>
            <HeaderMenus/>

            <div className='corpo'>

                <div className='cadastro'>
                    <h2>Por favor preencha as informações abaixo</h2>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>
                            <input type='text' value={nome_cliente} onChange={e => setNome(e.target.value)}/>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF ou CNPJ</label>
                                <labe>Endereço</labe>
                            </div>
                            <div className='input-grid'>
                                <input type='text' value={documento_cliente} onChange={e => setDocumento(e.target.value)}/>
                                <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)}/>
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Serviço</label>
                                <labe>Preço</labe>
                            </div>
                            <div className='input-grid'>
                                <select className='servico' value={tipo_servico} onChange={e => setServico(e.target.value)}>
                                    <option value="Jardinagem">Jardinagem</option>
                                    <option value="Instalação de Irrigação">Instalação de Irrigação</option>
                                    <option value="Agronomia">Agronomia</option>
                                </select>
                                <input type='text' value={orcamento} onChange={e => setOrcamento(e.target.value)} />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Data de Contratação</label>
                                <labe>ID do Funcionário</labe>
                            </div>
                            <div className='input-grid'>
                                <input type='date' value={contratacao} onChange={e => setContratacao(e.target.value)} />
                                <select className='funcionario'>
                                    <option></option>
                                </select>
                            </div>
                        </div>

                        <div className='campo'>
                            <label>Em Andamento</label>
                        </div>
                        <div className='botao-atv'>
                            <input type="radio" name="estaAtivo" /> <label>Sim</label>
                            <input type="radio" name="estaAtivo" /><label>Não</label>
                        </div>

                    </div>
                </div>

                
                <div className='botoes'>
                <div onClick={salvarServico}>
                        <Salvar />
                    </div>
                    <div>
                        <Link to={'/menu'}><Descartar /></Link>
                    </div>
                </div>

            </div>
            <FooterMenus />
        </div>
    )
}

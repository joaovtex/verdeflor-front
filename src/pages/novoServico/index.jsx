import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function NovoServico() {
    const navigate = useNavigate();
    const [nomeCliente, setNomeCliente] = useState('');
    const [documentoCliente, setDocumentoCliente] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipoServico, setTipoServico] = useState('Jardinagem');
    const [orcamento, setOrcamento] = useState('');
    const [contratacao, setContratacao] = useState('');
    const [funcionario, setFuncionario] = useState(' ');
    const [estaAtivo, setEstaAtivo] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        let token = localStorage.getItem('TOKEN')

        try {
            let resp = await axios.get('http://localhost:3010/buscar/funcionarios', {
                headers: { 'x-access-token': token }
            });

            setLista(resp.data);

            if (resp.data.length > 0) {
                setFuncionario(resp.data[0].ID);
            }
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error);
        }
    }

    async function salvarServico() {
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

        try {
            let resp = await axios.post(`${API_URL}/cadastrar/servico-prestado`, body,
                { headers: { 'x-access-token': token } });
            alert('Novo registro inserido: ' + resp.data.id);
            navigate(-1)
        } catch (error) {
            alert('Erro ao salvar colaborador: ' + error.response.data.erro);
        }
    }

    return (
        <div className='pagina-servico'>
            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <h2>Por favor preencha as informações abaixo</h2>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>
                            <input type='text' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF ou CNPJ</label>
                                <labe>Endereço</labe>
                            </div>
                            <div className='input-grid'>
                                <input type='text' value={documentoCliente} onChange={e => setDocumentoCliente(e.target.value)} />
                                <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Serviço</label>
                                <labe>Preço</labe>
                            </div>
                            <div className='input-grid'>
                                <select className='servico' value={tipoServico} onChange={e => setTipoServico(e.target.value)}>
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
                                <select className='funcionario' onChange={e => setFuncionario(e.target.value)}>
                                    {lista.map(item =>
                                        <option key={item.ID} value={item.ID}>{item.ID}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className='campo'>
                            <label>Em Andamento</label>
                        </div>
                        <div className='botao-atv'>
                            <input type="checkbox" checked={estaAtivo} onChange={e => setEstaAtivo(e.target.checked)} />
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

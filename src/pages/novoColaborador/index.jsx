import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';

export default function NovoColaborador() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('Jardineiro');
    const [jornada, setJornada] = useState('5x2');
    const [salario, setSalario] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');

    const { id } = useParams();

    async function salvarColaborador() {
        let body = {
            "nome": nome,
            "cpf": cpf,
            "telefone": telefone,
            "cargo": cargo,
            "jornada": jornada,
            "salario": salario,
            "dtAdmissao": dataAdmissao
        }

        let token = localStorage.getItem('TOKEN');

        try {
            let resp = await axios.post('http://localhost:3010/cadastrar/funcionario', body,
                { headers: { 'x-access-token': token } });
            alert('Novo registro inserido: ' + resp.data.id);
            navigate('/menu')
        } catch (error) {
            alert('Erro ao salvar colaborador: ' + error.response.data.erro);
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
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF</label>
                                <label>Telefone</label>
                            </div>
                            <div className='input-grid'>
                                <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} />
                                <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Cargo</label>
                                <label>Jornada</label>
                            </div>
                            <div className='input-grid'>
                                <select value={cargo} onChange={e => setCargo(e.target.value)}>
                                    <option value="Jardineiro">Jardineiro</option>
                                    <option value="Téc. de Irrigação">Téc. de Irrigação</option>
                                    <option value="Agrônomo">Agrônomo</option>
                                </select>
                                <select value={jornada} onChange={e => setJornada(e.target.value)}>
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
                                <input type='text' value={salario} onChange={e => setSalario(e.target.value)} />
                                <input type='date' value={dataAdmissao} onChange={e => setDataAdmissao(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botoes'>
                    <div onClick={salvarColaborador}>
                        <Salvar />
                    </div>
                    <div>
                        <Link to={'/menu'}><Descartar /></Link>
                    </div>
                </div>

            </div>
            <FooterMenus />

        </div>
    );
}

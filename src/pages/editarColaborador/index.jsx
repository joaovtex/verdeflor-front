import './index.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';

export default function EditarColaborador() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [jornada, setJornada] = useState('');
    const [salario, setSalario] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');
    const [estaAtivo, setEstaAtivo] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        buscarPorId();
    }, []);

    async function buscarPorId() {
        try {
            let token = localStorage.getItem('TOKEN');

            let resp = await axios.get(`http://localhost:3010/buscar/funcionario/${id}`, {
                headers: { 'x-access-token': token }
            });

            setNome(resp.data.Nome);
            setCpf(resp.data.CPF);
            setTelefone(resp.data.Telefone);
            setCargo(resp.data.Cargo);
            setJornada(resp.data.Jornada);
            setSalario(resp.data.Salário);
            setDataAdmissao(resp.data.DataAdmissão.split('T')[0])
            setEstaAtivo(resp.data.Ativo===1)
        } catch (error) {
            console.error("Erro: " + error)
        }
    }

    return (

        <div className='pagina-editarFuncionario'>
            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <p>Atualização de Funcionário</p>

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
                                <input type='text' value={cargo} onChange={e => setCargo(e.target.value)} />
                                <input type='text' value={jornada} onChange={e => setJornada(e.target.value)} />
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

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Ativo</label>
                            </div>

                            <div className='input-radios'>
                            <input type="radio" name='estaAtivo' checked={estaAtivo === true} onChange={() => setEstaAtivo(true)} /> <label>Sim</label>
                            <input type="radio" name='estaAtivo' checked={estaAtivo === false} onChange={() => setEstaAtivo(false)} /> <label>Não</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botoes'>
                    <div>
                        <Salvar />
                    </div>
                    <div>
                        <Link to={'/colaboradores'}><Descartar /></Link>
                    </div>
                </div>

            </div>

            <FooterMenus />
        </div>

    );
}
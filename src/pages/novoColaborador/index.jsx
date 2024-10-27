import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';

export default function NovoColaborador() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [jornada, setJornada] = useState('');
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
        } catch (error) {
            console.error('Erro ao salvar colaborador:', error.response.data); // Exibe a resposta do servidor
            alert('Erro ao salvar colaborador: ' + error.response.data.message); // Exibe a mensagem de erro, se disponível
        }
    }

    return (
        <div className='pagina-cadastro'>
            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <p>Por favor preencha as informações abaixo</p>

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
                    </div>
                </div>

                <div className='botoes'>
                    <div onClick={salvarColaborador}>
                        <Salvar />
                    </div>
                    <div>
                        <Descartar />
                    </div>
                </div>

            </div>
            <FooterMenus />

        </div>
    );
}

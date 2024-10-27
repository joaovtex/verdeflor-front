import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Botoes from '../../components/botoes';

export default function NovoColaborador() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [jornada, setJornada] = useState('');
    const [salario, setSalario] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');

    const navigate = useNavigate();

    //arrumar com a logica da maria
    async function salvarColaborador() {
        try {
            let body = {
                nome,
                cpf,
                telefone,
                cargo,
                jornada,
                salario,
                dataAdmissao
            };

            await axios.post('http://localhost:', body);
            alert('Colaborador cadastrado com sucesso');
            navigate('/menu');
        }
        catch (err) {
            alert(err.response.data.erro);
        }
    }

    return (
        <div className='pagina-cadastro'>
            <HeaderMenus />

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
            <Botoes />
            <FooterMenus />

        </div>
    );
}

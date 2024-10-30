import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';
import { Link } from 'react-router-dom';

export default function EditarServico() {
    return (

        <div className='pagina-editarServico'>
            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <p>Alteração de Dados do Serviço</p>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>
                            <input type='text' />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Endereço</label>
                                <label>Serviço</label>
                            </div>
                            <div className='input-grid'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Preço</label>
                                <label>Data de Contração</label>
                            </div>
                            <div className='input-grid'>
                                <input type='text' />
                                <input type='date' />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>ID Funcionário Alocado</label>
                                <label>Em Andamento</label>
                            </div>
                            <div className='input-grid'>
                                <select className='IDFuncionario'>
                                    <option></option>
                                </select>
                                <div className='input-gridRadio'>
                                    <input type="radio" name="estaAtivo" /> <label>Sim</label>
                                    <input type="radio" name="estaAtivo" /><label>Não</label>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='botoes'>
                    <div>
                        <Salvar />
                    </div>
                    <div>
                        {/* enquanto não crio a lista de serviços vou deixar para cair no menu*/}
                        <Link to={'/menu'}><Descartar /></Link>
                    </div>
                </div>

            </div>

            <FooterMenus />
        </div>
    );
}
import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import Salvar from '../../components/botoes/salvar';
import Descartar from '../../components/botoes/descartar';

// falta implementar a lógica e consequentemente os botoes

export default function NovoServico() {
    return (
        <div className='pagina-servico'>
            <HeaderMenus />

            <div className='corpo'>

                <div className='cadastro'>
                    <p>Por favor preencha as informações abaixo</p>

                    <div className='formulario'>

                        <div className='campo'>
                            <label>Nome Completo do Cliente</label>
                            <input type='text' />
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>CPF ou CNPJ</label>
                                <labe>Endereço</labe>
                            </div>
                            <div className='input-grid'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Serviço</label>
                                <labe>Preço</labe>
                            </div>
                            <div className='input-grid'>
                                <select className='servico'>
                                    <option></option>
                                </select>
                                <input type='text' />
                            </div>
                        </div>

                        <div className='campo-grid'>
                            <div className='label-grid'>
                                <label>Data de Contratação</label>
                                <labe>ID do Funcionário</labe>
                            </div>
                            <div className='input-grid'>
                                <input type='date' />
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

                {/* adc os botoes aqui */}

            </div>
            <FooterMenus />
        </div>
    )
}

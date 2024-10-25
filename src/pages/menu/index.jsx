import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import BotoesMenu from '../../components/botoesMenu';

export default function Menu() {
    return (

        <div className='pagina-menu'>
            
            <HeaderMenus/>

            <div className='corpo'>
                <h2>Seus Gerenciamentos</h2>
                 <BotoesMenu titulo="Novo Colaborador" texto="Cadastre novos colaboradores e 
                 mantenha sua equipe sempre pronta para o trabalho." image="/assets/images/iconeNovoColaborador.png"/>
            </div>

        </div>

    );
}
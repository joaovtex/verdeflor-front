import './index.scss'
import SobreNos from '../../components/secoes/sobreNos';
import Servicos from '../../components/secoes/servicos';
import UltimosServicos from '../../components/secoes/ultimosServicos';
import Dicas from '../../components/secoes/dicas';
import Parceiros from '../../components/secoes/parceiros';

export default function LangingPage() {
    return(

        <div className='landingPage'>
            <SobreNos/>
            <Servicos/>
            <UltimosServicos/>
            <Dicas/>
            <Parceiros></Parceiros>
        </div>

    );
}
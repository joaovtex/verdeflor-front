import './index.scss'
import SobreNos from '../../components/sobreNos';
import Servicos from '../../components/servicos';
import UltimosServicos from '../../components/ultimosServicos';
import Dicas from '../../components/dicas';
import Parceiros from '../../components/parceiros';

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
import './index.scss'
import Header from '../../components/secoes/header'
import SobreNos from '../../components/secoes/sobreNos'
import Servicos from '../../components/secoes/servicos'
import UltimosServicos from '../../components/secoes/ultimosServicos'
import Dicas from '../../components/secoes/dicas'
import Parceiros from '../../components/secoes/parceiros'
import Footer from '../../components/secoes/footer'

export default function LangingPage() {
    return (

        <div className='landingPage'>

            <Header/>

            <div className='corpo'>
                <SobreNos />

                <Servicos />

                <UltimosServicos />

                <Dicas />
                
                <Parceiros></Parceiros>
            </div>

            <Footer/>

        </div>

    );
}
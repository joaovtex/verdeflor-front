import './index.scss'
import ServicosCards from '../servicosCards';

export default function Servicos() {
    return (

        <div className='pagina-servicos'>
            <h1>SERVICOS</h1>
            <p>Com a VerdeFlor, você pode contratar serviços como:</p>
            <div className='cards'>
                <ServicosCards image="/assets/images/servicoJardim.png" titulo="Manutenção de Jardim" />
                <ServicosCards image="/assets/images/servicoPlantio.png" titulo="Plantio de Flores e Árvores" />
                <ServicosCards image="/assets/images/servicoIrrigacao.png" titulo="Instalação de Sistemas de Irrigação" />
                <ServicosCards image="/assets/images/servicoCuidados.png" titulo="Cuidados com Hortas Residenciais" />
            </div>
        </div>

    );
}
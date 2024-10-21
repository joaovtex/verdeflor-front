import './index.scss'
import UltimosServCards from '../../ultimosServicosCards';

export default function UltimosServicos () {
    return (

        <div className='pagina-ultimosServ'>
            <h1>ÚLTIMOS SERVIÇOS</h1>
            <div className='cards'>
                <UltimosServCards titulo="Podagem de Arbusto" image="/assets/images/USPodagem.png" />
                <UltimosServCards titulo="Aplicação de Grama" image="/assets/images/USGrama.png" />
                <UltimosServCards titulo="Plantação de Tomate" image="/assets/images/USPlantacao.png" />
            </div>
        </div>

    );
}
import './index.scss'
import UltimosServCards from '../../ultimosServicosCards';
import ultimosServCardsElements from './componentsElements.js';

export default function UltimosServicos() {
    return (

        <div className='pagina-ultimosServ'>
            <h1>ÚLTIMOS SERVIÇOS</h1>
            <div className='cards'>

                {ultimosServCardsElements.map((item, index) => (
                    <UltimosServCards
                        key={index}
                        titulo={item.titulo}
                        image={item.image}
                    />
                ))}

            </div>
        </div>

    );
}
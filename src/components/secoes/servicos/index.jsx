import './index.scss'
import ServicosCards from '../../servicosCards';
import servicosCardsElements from './componentsElements.js';

export default function Servicos() {
    return (

        <div className='pagina-servicos'>
            <h1>SERVIÇOS</h1>
            <p>Com a VerdeFlor, você pode contratar serviços como:</p>
            <div className='cards'>

                {servicosCardsElements.map((item, index) => (
                    <ServicosCards
                        key={index}
                        image={item.image}
                        titulo={item.titulo} />
                ))}

            </div>
        </div>

    );
}
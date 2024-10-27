import './index.scss'
import DicasCards from '../../dicasCards';
import dicasCardsElements from './componentsElements.js';

export default function Dicas() {
    return (

        <div className='pagina-dicas'>
            <div className='dicasJardim'>
                <h1>DICAS PARA O SEU JARDIM</h1>

                {dicasCardsElements.map((item, index) => (
                    <DicasCards
                        key={index}
                        titulo={item.titulo}
                        conteudo={item.conteudo}
                    />
                ))}

            </div>

            <img src="/assets/images/dicasJardim.png" alt="" />
        </div>

    );
}
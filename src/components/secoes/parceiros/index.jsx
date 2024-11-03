import './index.scss'
import parceiros from './componentsElements.js';

export default function Parceiros() {

    return (

        <div className='pagina-parceiros'>

            <h1>PARCEIROS: </h1>

            {parceiros.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                />
            ))}

        </div>

    );
}
import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function BotoesMenu(props) {
    const navigate = useNavigate()

    return (

        <div className='component-botoesmenu' onClick={() =>navigate(`${props.link}`)}>

            <div className='textos'>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>

            <div className='icones'>
                <img src="/assets/images/iconeMais.png" alt="" id='plus' />
                <img src={props.image} alt="" id='icone' />
            </div>
            
        </div>

    );

}
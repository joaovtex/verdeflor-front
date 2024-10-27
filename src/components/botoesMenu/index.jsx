import './index.scss';
import { Link } from 'react-router-dom';

export default function BotoesMenu(props) {

    return (
        <Link to={props.link} className='component-botoesmenu'>
            <div className='textos'>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>

            <div className='icones'>
                <img src="/assets/images/iconeMais.png" alt="" id='plus' />
                <img src={props.image} alt="" id='icone' />
            </div>
        </Link>
    );

}
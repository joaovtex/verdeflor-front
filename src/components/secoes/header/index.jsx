import './index.scss'
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <div className='pagina-header'>
            <div className='conteudo'>
                <Link to="/login">
                    <button>
                        <img src="/assets/images/loginUser.png" alt="" />
                        Login
                    </button>
                </Link>

                <h1>VerdeFlor</h1>
                <p>Cuidados para o seu jardim</p>

            </div>
        </div>

    );
}
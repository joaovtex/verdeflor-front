import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()

    return (

        <div className='pagina-header'>

            <div className='conteudo'>
                <button onClick={() => navigate('/login')}>
                    <img src="/assets/images/loginUser.png" alt="" />
                    Login
                </button>

                <h1>VerdeFlor</h1>

                <p>Cuidados para o seu jardim</p>
            </div>

        </div>

    );
}
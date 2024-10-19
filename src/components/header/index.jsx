import './index.scss'

export default function Header() {
    return (

        <div className='pagina-header'>
            <div className='conteudo'>
                <button>
                    <img src="/assets/images/loginUser.png" alt="" />
                    Login
                </button>

                <h1>VerdeFlor</h1>
                <p>Cuidados para o seu jardim</p>

            </div>
        </div>

    );
}
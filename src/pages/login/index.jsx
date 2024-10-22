import './index.scss'

export default function Login() {
    return (

        <div className='pagina-login'>
            <img src="../../../assets/images/loginImage.png" alt="" className='imagem' />

            <div className='conecte'>

                <div className='textos'>
                    <h2>Conecte-se</h2>

                    <p>
                        Bem vindo de volta! <br />
                        Por favor, entre em sua conta
                    </p>
                </div>

                <div className='entrada'>
                    <img src="../../../assets/images/email.png" alt="" className='icones' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className='entrada'>
                    <img src="../../../assets/images/senha.png" alt="" className='icones' />
                    <input type="text" placeholder='Senha' />
                </div>


                <button>ENTRAR</button>
            </div>
        </div>

    );
}
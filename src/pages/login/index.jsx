import './index.scss';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();
    
    async function logar() {
        try {
            let body = {
                "email": email,
                "senha": senha
            }
            
            let resp = await axios.post('http://localhost:3010/login', body);
            
            localStorage.setItem('TOKEN', resp.data.token);

            navigate('/menu');

        }
        catch (err) {
            alert(err.response.data.erro)
        }
    }

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

                <div className='campo'>
                    <img src="../../../assets/images/email.png" alt="" className='icones' />
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='campo'>
                    <img src="../../../assets/images/senha.png" alt="" id='senha' />
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}  />
                </div>


                <button onClick={logar}>ENTRAR</button>
            </div>
        </div>

    );
}
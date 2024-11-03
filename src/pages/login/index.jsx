import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/constants.js'


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logar() {
        try {
            let body = {
                "email": email,
                "senha": senha
            }

            let resp = await axios.post(`${API_URL}/login`, body)

            localStorage.setItem('TOKEN', resp.data.token)

            navigate('/menu')
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
                        Por favor, entre em sua conta:
                    </p>
                </div>

                <div className='campo'>
                    <img
                        src="../../../assets/images/email.png"
                        className='icones'
                    />
                    <input type='text'
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <img
                        src="../../../assets/images/senha.png"
                        id='senha'
                    />
                    <input
                        placeholder='Digite sua senha'
                        type='password'
                        value={senha} onChange={e => setSenha(e.target.value)}
                    />
                </div>

                <button onClick={logar}>ENTRAR</button>
            </div>

        </div>

    );
}
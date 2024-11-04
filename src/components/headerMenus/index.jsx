import './index.scss';
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HeaderMenus() {
    const navigate = useNavigate();

    function logoff() {
        localStorage.removeItem('TOKEN');
        navigate('/');
    }


    return (

        <div className='component-headermenus'>

            <div className='conteudo'>
                <button onClick={logoff}>
                    <img src="/assets/images/sairUser.png" alt="" />
                    Sair
                </button>

                <div>
                    <h1>VerdeFlor</h1>
                    <p>Cuidados para o seu jardim</p>
                </div>
            </div>

        </div>

    );
}

import axios from 'axios'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Teste() {

    const navigate = useNavigate();

    function logoff() {
        localStorage.removeItem('TOKEN');
        navigate('/login');
    }

    return (

        <div>
            <p>deu!</p>
            <button onClick={logoff}>SAIR</button>
        </div>

    );
}
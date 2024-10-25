import React from "react";
import { Navigate } from "react-router-dom";

const RotasProtegidas = ({children}) => {
    const token = localStorage.getItem('TOKEN');

    if (!token) {
        return <Navigate to="/"/>
    }

    return children;
}

export default RotasProtegidas;
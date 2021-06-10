import React from "react";
import { useHistory } from "react-router-dom"

const HomePage = () => {
    const history = useHistory()

    const goToLogin = () => {
        history.push("/login")
    };

    const goToSignup = () => {
        history.push("/signup")
    };

    const goToLista = () => {
        history.push("/trips")
    };

    const goBack = () => {
        history.goBack()
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={goToLista}>Lista de Produtos</button>
            <button onClick={goToSignup}>Signup</button>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    );
};

export default HomePage


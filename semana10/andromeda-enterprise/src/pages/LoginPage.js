import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const [email, handleEmail] = useInput("");
    const [password, handlePassword] = useInput("");
    const history = useHistory();

    useEffect(() => {
        document.title = "LabeX";
    });

    const onClickLogin = () => {
        const body = { email, password };
        axios
            .post(`${BASE_URL}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                history.push("/trip-detail");
                console.log(body)
                console.log(res.data.token)
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <div>
            <h1>Login</h1>
            <input value={email} onChange={handleEmail} placeholder="Email"/>
            <input type="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button onClick={onClickLogin}>Enviar</button>
        </div>
    );
};

export default LoginPage;
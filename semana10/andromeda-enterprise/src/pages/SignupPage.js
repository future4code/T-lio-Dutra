import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
    const [email, handleEmail] = useInput("");
    const [password, handlePassword] = useInput("");
    const history = useHistory();

    useEffect(() => {
        document.title = "LabeX";
    });

    const onClickSignup = () => {
        const body = { email, password };
        axios
            .post(`${BASE_URL}/signup`, body)
            .then((res) => {
                history.push("/login");
                alert("Conta criada com sucesso")
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <div>
            <h1>Signup</h1>
            <input value={email} onChange={handleEmail} placeholder="Email"/>
            <input type="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button onClick={onClickSignup}>Criar</button>
        </div>
    );
};

export default SignupPage;
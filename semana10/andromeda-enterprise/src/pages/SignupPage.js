import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
    const [form, setForm] = useState({ email: "", password: ""});
    const history = useHistory();

    useEffect(() => {
        document.title = "LabeX";
    });

    const onChange = (e) => {
        const {name, value } = e.target
        setForm({...form, [name]: value });
    };

    const goBack = () => {
        history.goBack()
    };

    const fazerCadastro = (event) => {
        event.preventDefault();
        const body = { form };
        axios
            .post(`${BASE_URL}/signup`, form)
            .then((res) => {
                history.push("/");
                alert("Conta criada com sucesso")
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <button onClick={goBack}>Voltar</button>
            <form onSubmit={fazerCadastro}>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    required
                    type="email"
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    required
                    type="password"
                    pattern={"^.{3,}"}
                    title={"Senha deve conter mais de 3 caracteres"}
                />
                <button>Cadastrar</button>
            </form>
        </div>
    );
};

export default SignupPage;


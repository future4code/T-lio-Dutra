import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const history = useHistory();

    useEffect(() => {
        document.title = "LabeX";
    });

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
    };

    const fazerLogin = (event) => {
        event.preventDefault();
        const body = { form };
        axios
            .post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                history.push("/adm-home");
                console.log(body)
                console.log(res.data.token)
            })
            .catch((err) => alert(err.response.data.message));
    };

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={goBack}>Voltar</button>
            <form onSubmit={fazerLogin}>
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
                <button>Login</button>
            </form>
        </div>
    );
};


export default LoginPage;
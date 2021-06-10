import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";


const CreateTripPage = () => {
    const [form, setForm] = useState({ name: "", planet: "", date: "", description: "", durationInDays: "" });
    const history = useHistory();

    useProtectedPage();

    useEffect(() => {
        document.title = "LabeX"
    });

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
    };

    const goBack = () => {
        history.goBack();
    };

    const criarViagem = (event) => {
        event.preventDefault();
        const body = { form };
        axios
            .post(`${BASE_URL}/trips`, form)
            .then((res) => {
                localStorage.setItem("viagem", res.data.viagem);
                history.push("/create-trip");
                console.log(body)
            })
            .catch((err) => alert(err.response.data.message));
    };



    return (
        <div>
            <h1>Criar Viagem</h1>
            <button onClick={goBack}>Voltar</button>
            <form onSubmit={criarViagem}>
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome:"}
                    required
                />
                <input
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    placeholder={"Planeta:"}
                    required
                />
                <input
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    placeholder={"Data:"}
                    required
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    placeholder={"Descrição da viagem:"}
                    required
                />
                <input
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder={"Duração da viagem em dias:"}
                    required
                />
            </form>
        </div>
    )
};

export default CreateTripPage
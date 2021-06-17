import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const ApplicationFormPage = () => {
    const [form, setForm] = useState({ name: "", age: "", applicationText: "", profession: "", country: "" });
    const history = useHistory();

    useEffect(() => {
        document.title = "LabeX";
    });

    const onChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value });
    };

    const goBack = () => {
        history.goBack();
    };

    const inscreverViagem = (event) => {
        event.preventDefault();
        const body = { form };
        axios
            .post(`${BASE_URL}/trips/id`, form)
            .then((res) => {
                history.push("/trips");
                alert("Inscrição feita com sucesso!")
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <div>
            <h1>Criar Viagem</h1>
            <button onClick={goBack}>Voltar</button>
            <form onSubmit={inscreverViagem}>
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome:"}
                    required
                />
                <input
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    placeholder={"Idade:"}
                    required
                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder={"Texto de inscrição:"}
                    required
                />
                <input
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"Profissão:"}
                    required
                />
                <input
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    placeholder={"País:"}
                    required
                />
            </form>
        </div>
    );
};

export default ApplicationFormPage
import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../hooks/useProtectedPage";

const AdminHomePage = () => {
    const history = useHistory()

    useProtectedPage();

    const goBack = () => {
        history.goBack()
    };

    const goToLista = () => {
        history.push("/trips")
    };

    const goToTripDetail = () => {
        history.push("/trip-detail")
    };

    const goToCreateTrip = () => {
        history.push("/create-trip")
    };


    return (
        <div>
            <h1>Pagina do Administrador</h1>
            <button onClick={goToLista}>Lista de Produtos</button>
            <button onClick={goToTripDetail}>Detalhes de viagens</button>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
};

export default AdminHomePage
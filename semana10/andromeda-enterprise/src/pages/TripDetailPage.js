import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";

const TripDetailPage = () => {
    const [trip, setTrip] = useState({});
    const history = useHistory();

    useProtectedPage();

    const getTripDetail = (id) => {
        axios.get(`${BASE_URL}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setTrip(res.data.trip);
                history.push("/trip-detail")
            })
    };

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getTripDetail("nLngxFS6rfO5NploohJn");
    }, [history]);

    return (
        <div>
            <h1>Detalhe da Viagem</h1>
            <button onClick={goBack}>Voltar</button>
            {trip.name ? trip.name : <p>Carregando...</p>}
        </div>
    );
};

export default TripDetailPage;


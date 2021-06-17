import React from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";
import { useHistory } from "react-router-dom"

const ListTripsPage = () => {
    const viagensLista = useRequestData(`${BASE_URL}/trips`, {})
    const history = useHistory();

    const viagensComponents = viagensLista.results && viagensLista.results.map((viagem) => {
        return <button key={viagem.name}>{viagem.name}</button>
    });

    const goBack = () => {
        history.goBack()
    };

    const goToApplicationForm = () => {
        history.push("/apply")
    }

    return(
        <div>
            <h1>Lista de Produtos</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationForm}>Inscrever</button>
            {viagensComponents}
        </div>
    )
};
export default ListTripsPage
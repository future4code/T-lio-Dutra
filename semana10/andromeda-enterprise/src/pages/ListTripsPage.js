import React from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

const ListTripsPage = () => {
    const viagensLista = useRequestData(`${BASE_URL}/trips`, {})

    const viagensComponents = viagensLista.results && viagensLista.results.map((viagem) => {
        return <button key={viagem.name}>{viagem.name}</button>
    })

    return(
        <div>
            <h1>Lista de Produtos</h1>
            {viagensComponents}
        </div>
    )
};
export default ListTripsPage
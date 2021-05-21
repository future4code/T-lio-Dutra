import React from 'react';
import styled from 'styled-components'

const CardPeq = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

function CardPequeno(props) {
    return (
        <CardPeq>
            <h4>{ props.nome}</h4>
            <p>{ props.descricao}</p>
        </CardPeq>
    )
}

export default CardPequeno;
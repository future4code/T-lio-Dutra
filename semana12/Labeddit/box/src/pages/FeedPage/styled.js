import styled from "styled-components";

export const PostListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
`
export const Card = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    margin: 10px;
`
export const Titulo = styled.div `
    background-color: lightgray;
    display: flex;
    justify-content: center;
`
export const Body = styled.div `
    display: flex;
    justify-content: space-evenly;
`
export const Footer = styled.div `
    display: flex;
    justify-content: space-around;
    background-color: #6A6A6D;
`
export const Comments = styled.p`
    cursor: pointer;
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 300px;
    align-items: center;
    margin-bottom: 20px;
`
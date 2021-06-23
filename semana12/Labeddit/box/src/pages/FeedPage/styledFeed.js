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
export const Titulo = styled.h3 `
    background-color: pink;
    margin-top: 0;
`
export const Body = styled.div `
    background-color: plum;
`
export const Footer = styled.div `
    display: flex;
    justify-content: space-around;
`
export const CommentButton = styled.button`
    height: 40px;
    margin-top: 5px;
`
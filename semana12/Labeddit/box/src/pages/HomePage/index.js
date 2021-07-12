import React from "react";
import { LogoImage, ScreenContainer, TextHome } from "./styled";
import logo from "../../assets/logo.png"

const HomePage = () => {
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <TextHome>Seja bem-vindo(a) a Box, o seu novo modo de compartilhar ideias com o mundo</TextHome>
            <TextHome>Crie sua conta, e faça parte dessa comunidade</TextHome>
        </ScreenContainer>
    )
}

export default HomePage
import React from "react";
import { Button } from "@material-ui/core";
import { ButtonsContainer } from "./styles";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const HomePage = () => {
    return <div>
        <PageTitle title={"LabeX"}/>
        <ButtonsContainer>
            <Link to={"/login"}>
                <Button variant={"outlined"} color={"secondary"}>Área do Administrador</Button>
            </Link>
            <Link to={"/inscricao"}>
                <Button variant={"contained"} color={"primary"}>Quero me Candidatar!</Button>
            </Link>
        </ButtonsContainer>
    </div>
}

export default HomePage
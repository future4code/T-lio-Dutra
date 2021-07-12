import React from "react";
import error from "../../assets/error.png"
import { Typography } from "@material-ui/core";
import { ErrorImage, ErrorPageContainer } from "./styled";

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={"secondary"} variant={"h4"} align={"center"}>
                Erro 404 - Página não encontrada!
            </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage
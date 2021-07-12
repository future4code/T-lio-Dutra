import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/users";

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({username:"", email:"", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Usuário"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
                </InputsContainer>
                <Button
                    color={"secondary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    Fazer Cadastro
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm
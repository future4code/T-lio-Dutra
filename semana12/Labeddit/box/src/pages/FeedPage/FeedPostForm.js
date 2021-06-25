import React from "react";
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";

const PostForm = ({postForm}) => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const history = useHistory()
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, postForm)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Texto"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"secondary"}
                    margin={"normal"}
                >
                    Criar post
                </Button>
            </form>
        </InputsContainer>

    )
}

export default PostForm
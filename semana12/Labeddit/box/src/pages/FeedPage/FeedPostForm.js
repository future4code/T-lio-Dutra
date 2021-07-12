import React from "react";
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import {CreateNewPost} from "../../services/post";

const PostForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        CreateNewPost(form, clear)
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
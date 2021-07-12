import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const CreateNewPost = (body, clear) => {
    axios.post(`${ BASE_URL }/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            alert(res.request.response)
            clear()
        })
        .catch((err) => alert('Ocorreu algum erro e não foi possível criar o seu post, por favor tente novamente!'))
}

export const CreateNewComment = (body, id, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body,  {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {alert(res.request.response)
    clear()
    })
    .catch((err) => console.log(err))
}
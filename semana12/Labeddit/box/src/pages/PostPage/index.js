import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import { CreateNewComment } from "../../services/post";

const PostPage = () => {
    useProtectedPage()
    const params = useParams().id
    const PostInfo = useRequestData({}, `${BASE_URL}/posts/${params}/comments`)
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const comentarios = PostInfo.length > 0 && PostInfo.map((comments) => {
        return(
            <div>
                <p>{comments.username}</p>
                <p>{comments.body}</p>
                <hr/>
            </div>
        )
    });
    const postMain = posts.length > 0 && posts.map((post) => {
        if (params === post.id){
            return(
               <div>
                   <p>{post.username}</p>
                   <p>{post.body}</p>
               </div> 
            )
        }
        
    })
    const [form, onChange, clear] = useForm({ body: "" })
    const onSubmitComment = (event) => {
        event.preventDefault()
        CreateNewComment(form, params, clear )
    }
    

    return (
        <div>
            {postMain}
            <form onSubmit={onSubmitComment}>
                <input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Comentario"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
                <button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"secondary"}
                    margin={"normal"}
                >
                    Comentar
                </button>
            </form>
            {comentarios}
        </div>
    )
}

export default PostPage
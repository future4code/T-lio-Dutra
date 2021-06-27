import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { PostListContainer, Card, Titulo, Body, Footer, Comments } from "./styled";
import PostForm from "./FeedPostForm";
import { useHistory } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickComment = (id) => {
        goToPost(history, id.id)
    }
    const postsCards = posts.map((post) => {
        if (post.commentCount === null) {
            return (<Card key={post.id}>
                <Titulo>
                    <h3>{post.title}</h3>
                </Titulo>
                <Body>
                    <p>{post.body}</p>
                </Body>
                <Footer>
                    <p>Like</p>
                    <Comments onClick={() => onClickComment(post)}>Comentarios(0)</Comments>
                </Footer>
            </Card>)
        }
        else {
            return (
                <Card key={post.id}>
                    <Titulo>
                        <h3>{post.title}</h3>
                    </Titulo>
                    <Body>
                        <p>{post.body}</p>
                    </Body>
                    <Footer>
                        <p>Like</p>
                        <Comments onClick={() => onClickComment(post)}>Comentarios({post.commentCount})</Comments>
                    </Footer>
                </Card>
            )
        }
    })

    return (
        <PostListContainer>
            <PostForm />
            {postsCards}
        </PostListContainer>
    )
}

export default FeedPage
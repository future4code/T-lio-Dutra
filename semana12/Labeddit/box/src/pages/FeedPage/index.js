import React from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { PostListContainer, Card, Titulo, Body, Footer, CommentButton } from "./styled";
import PostForm from "./FeedPostForm";
import { useHistory } from "react-router-dom";


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)

    const onClickComment = () => {
        history.push("/post")
    }

    const postsCards = posts.map((post) => { 
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
                    <CommentButton onClick={onClickComment}>Comentar</CommentButton>
                </Footer>
            </Card>
        )
    })

    return (
        <PostListContainer>
            <h1>FeedPage</h1>
            <PostForm/>
            {postsCards}
        </PostListContainer>
    )
}

export default FeedPage
import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const[comentar, SetComentar] = useState("")


	const onChangeComentario = (event) => {
		SetComentar(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentar}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(comentar) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario
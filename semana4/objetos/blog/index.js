let postagem = null

function recolheDados() {
    //pegar os parametros dos objetos e salva nas consts
    const tituloPost = document.getElementById("titulo")
    const autorPost = document.getElementById("autor")
    const conteudoPost = document.getElementById("conteudo")

postagem = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value
}
console.log(postagem)

titulo.value = ""
autor.value = ""
conteudo.value = ""
}

function exibeDados(){
    let containerDePosts = document.getElementById("containerDePosts")

    containerDePosts.innerHTML += `<p>Novo Post:</p>
    <p>Título: ${postagem.titulo}</p>
    <p>Autor: ${postagem.autor}</p>
    <p>Conteúdo: ${postagem.conteudo}</p><br>`
}


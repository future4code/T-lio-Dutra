export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}


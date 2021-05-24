function inverteArray (array) {
    let arrayInvertido = [];
    for( let i = array.lenght - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}
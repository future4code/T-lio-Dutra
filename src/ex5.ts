const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])

function operações(num1: number, num2: number): void {
    console.log("Soma: ", num1 + num2)
    console.log("Sub: ", num1 - num2)
    console.log("Mult: ", num1 * num2)

    if (num1 > num2) {
        console.log("Maior: ", num1)
    } else if (num1 < num2) {
        console.log("Maior: ", num2)
    } else {
        console.log(`Os números são iguais.`)
    }

}
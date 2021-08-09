const colors = require("colors")
// Exercício 2
const operação = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operação) {
    case "soma":
        console.log(`${num1 + num2}`.yellow)
        break;
    case "subt":
        console.log(`${num1 - num2}`.red)
        break;
    case "div":
        console.log(`${num1 / num2}`.blue)
        break;
    case "mult":
        console.log(`${num1 * num2}`.magenta)
        break;
}
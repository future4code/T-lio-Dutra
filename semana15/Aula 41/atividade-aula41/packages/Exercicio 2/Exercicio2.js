const operaçao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])


switch (operaçao) {
    case "soma":
        console.log(n1 + n2)
        break;
    case "subt":
        console.log(n1 - n2)
        break;
    case "div":
        console.log(n1 / n2)
        break;
    case "mult":
        console.log(n1 * n2)
        break;
    default:
        break;
}

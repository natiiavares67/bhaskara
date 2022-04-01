function CalcularDelta(a, b, c) {
    return b*b - 4*a*c
}
function calcularX1(delta, a, b) {
    return (-b + Math.sqrt(delta)) / (2*a)
}
function calcularX2(delta, a, b) {
    return (-b - Math.sqrt(delta)) / (2*a)

}
function bhaskara(a, b, c){
    const valorDelta = calcularDelta(a, b, c)
    let x1 = 'inexistente' , x2 = 'inexistente'
    if (valorDelta === 0) {
        x1 = calcularX1(valorDelta, a, b)
        x2 = 'Inexistente'
    }
    else if (valorDelta > 0){
        x1 = calcularX1(valorDelta, a, b)
        x2 = calcularX2(valorDelta, a, b)
    }
    return {x1: x1, x2: x2}
}

console.log(bhaskara(1, -5, 4))
console.log(bhaskara(2, 5, 4))
console.log(bhaskara(1, 4, 4))

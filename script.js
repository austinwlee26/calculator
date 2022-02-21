const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;



const operate = function(n1, operator, n2) {
    if (operator === "+") {
        return add(n1, n2);
    } else if (operator === "-") {
        return subtract(n1, n2)
    } else if (operator === "*") {
        return multiply(n1, n2)
    } else if (operator === "/") {
        return divide(n1, n2)
    }
}

console.log(operate(2, "/", 3))
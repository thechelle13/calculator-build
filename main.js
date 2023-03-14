//write Subtract, divide, mult, square functions .function must have exact names


const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

// let result = add(17, 9)
// console.log(result)

// solve (0.25x * 4) + (0.75x * 2) = 60      A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. If there are 60 legs overall, how many animals are there on the farm?

const subtract = (numberOne, numberTwo) => {
    const difference = numberOne - numberTwo

    return difference
}
// // let result = subtract(10, 5)
// // console.log(result)

// const newNumberSub = subtract()

//console.log(newNumberSub)


const divide = (numberOne, numberTwo) => {
    const quotient = numberOne / numberTwo

    return quotient
}

// let result = divide(50,5)
// console.log(result)



const multiple = (numberOne, numberTwo) => {
    const product = numberOne * numberTwo

    return product
}
// // let result = multiple( 10, 10)
// console.log(result)


const square = (numberOne) => {
    const squared = numberOne * numberOne

    return squared
}


// let result = square(100)
// console.log(result)
// const newNumberSq = square()
// console.log(newNumberSq)

const total = 60 
const calculator = (numbOne) => {
    const newNumberMult = multiple(0.25, 4)
    console.log(newNumberMult)
    const nextNumberMult = multiple(0.75, 2)
    console.log(nextNumberMult)
    const newNumberAdd = add(newNumberMult, nextNumberMult)
    console.log(newNumberAdd)
    const newNumberDiv = divide(numbOne , newNumberAdd)
    console.log(newNumberDiv)
    return newNumberDiv

}
console.log(calculator(total))


//(0.25x * 4) + (0.75x * 2) = 60  
// let random=Math.random()
// let a=prompt("Enter the first number")
// let c=prompt("enter the operation ")
// let b=prompt("enter the second number")

// let obj={
//     "+":"-",
//     "-":"*",
//     "*":"/",
//     "/":"**",
// }

// if (random>0.1){
//     console.log(`result is ${a} ${c} ${b}`)
//     alert(`result is ${eval(`${a} ${c} ${b}`)}`)
// }
// else{
//     c=obj[c]
//     alert(`result is ${eval(`${a} ${c} ${b}`)}`)
// }

let random=Math.random
let a=prompt("Enter the first number")
let c=prompt("enter the operation")
let b=prompt("enter the second number")

let obj={
    "+":"-",
     "-":"*",
    "*":"/",
    "/":"**",
}

if(random>0.1){
    console.log(`result is ${a} ${c} ${b}`)
    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
}
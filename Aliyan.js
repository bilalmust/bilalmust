function Subtraction(num1,num2){
    document.write("the subtraction is=", num1-num2)
}
let count=0
while(count<10){
    let Question1=parseInt(prompt("what number do you want to subtract?"))
    
    let Question2=parseInt(prompt("2nd number"))

    Subtraction(Question1,Question2)
}   count++
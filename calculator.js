const display = document.getElementById("numbersDisplay")
let displayHolder= [];
let operantA = 0;
let operantB = 0;
let eval;
let operantHolder=[];
const clear = document.getElementById("clear")
const percentage = document.getElementById("percentage")
const divideSlash = document.getElementById("divide")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8") 
const num9 = document.getElementById("num9")
const times = document.getElementById("times")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const minus = document.getElementById("minus")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const plus = document.getElementById("plus")
const num0 = document.getElementById("num0")
const point = document.getElementById("point")
const equal = document.getElementById("equal");

const add = (a,b) => Math.round((a + b)*1000)/1000
const subtract = (a,b) => Math.round((a-b)*1000)/1000
const multiply = (a,b) => Math.round((a*b)*1000)/1000
const divide = (a,b) => b==0 ? display.textContent="Back to school" : Math.round((a/b)*1000)/1000

const clearAll = ()=>{
    operantHolder=[];
    operantA = null;
    operantB = null;
    display.textContent = 0;
    displayHolder = []
}

const operator = (a,b, eval) => {
    if (eval === "add" ){
        return display.textContent = add(a,b)
    } else if (eval === "subtract"){
        return display.textContent = subtract(a,b)
    } else if (eval === "multiply"){
        return display.textContent = multiply(a,b)
    } else if (eval === "divide") {
        return display.textContent = divide(a,b)
    }
}

const btns = document.querySelectorAll("button")
btns.forEach(btn=>{btn.addEventListener("click", ()=>{
    if(display.textContent === "Back to school"){
        clearAll()
    }
    if (btn.id == "clear") {
        clearAll()
    } else if (btn.id=="backspace") {
        display.textContent = display.textContent.slice(0,-1)
        displayHolder = new Array(display.textContent);
    } else if (btn.id == "equal" || btn.id=="plus" || btn.id == "minus" || btn.id=="divide" || btn.id=="times" || btn.id=="percentage"){
        if(btn.id=="percentage"){
            display.textContent = Number(display.textContent)/100
        } else {
        operantHolder.push(display.textContent)
        switch (btn.id){
            case "equal" :
                console.log(operantHolder)
                if(operantHolder.length <= 1 || operantHolder.length >=3){
                  alert("Check your Inputs") 
                  clearAll()
                } else {
                    operantA = Number(operantHolder[0])
                    operantB = Number(operantHolder[1])
                    operator(operantA,operantB, eval);
                    operantHolder = []
                    operantA = null;
                    operantB = null;
                }
                break;
                case "plus" :
                    eval = "add";
                    displayHolder.push(display.textContent);
                    displayHolder=[]
                break;
                case "minus":
                   eval = "subtract";
                   displayHolder.push(display.textContent);
                   displayHolder=[]
                   break;
                   case "divide":
                       eval = "divide";
                       displayHolder.push(display.textContent);
                       displayHolder=[]
                       break;
                       case "times" :
                           eval = "multiply";
                           displayHolder.push(display.textContent);
                           displayHolder=[]
                        }
                    }
                    }else {
                        displayHolder.push(btn.textContent);
                        display.textContent = displayHolder.join(""); 
                        display.textContent.includes(".") ?
                        document.getElementById("point").disabled = true: document.getElementById("point").disabled = false;
                    }
})})
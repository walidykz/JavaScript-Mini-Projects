const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myCalcResult = document.getElementById("result");
const myClear = document.getElementById("myClear");
const myHistoryResult = document.getElementById("myHistory");
let historyResult=[];

mySubmit.onclick = function(){
    const input1 = Number(document.getElementById("input1").value);
    const input3 = Number(document.getElementById("input3").value);
    const input2 = document.getElementById("input2");
    let finalResult = 0;

    switch(input2.value){
        case "+" :
            finalResult = input1 + input3;
            break;
        case "-" :
            finalResult = input1 - input3;
            break;
        case "*" :
            finalResult = input1 * input3;
            break;
        case "/" :
            if(input3 == 0){
                myCalcResult.textContent = "Cannot devide by zero"
                return;
            }
            finalResult = input1 / input3;
            break;
        case "%" :
            finalResult = input1 % input3;
            break;
    }

    myCalcResult.textContent = `${input1} ${input2.value} ${input3} = ${finalResult}`;
    historyResult.push(`${input1} ${input2.value} ${input3} = ${finalResult}`);
    myHistoryResult.textContent = historyResult.join("\n");
}

myClear.onclick = function(){
    let input1 = document.getElementById("input1");
    let input3 = document.getElementById("input3");
    let input2 = document.getElementById("input2");

    input1.value = "";
    input2.value = "+";
    input3.value = "";
    myCalcResult.textContent = "";
    historyResult = [];
}
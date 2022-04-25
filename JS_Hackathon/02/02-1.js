let numbers = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let text = document.getElementById("input-text");

let firstNumber = "";
let secNumber = "0";


//數字輸入
numbers.forEach((number, index)=>{
    //number 加入 click 事件
    number.addEventListener("click", (event)=>{
        // console.log(event.target.innerText);
        //讓輸入的數字存放在 firstNumber 裡面
        firstNumber += event.target.innerText;
        // input.value 顯示在 對話框裡
        text.value = firstNumber;
    });
});

//加減乘除(判斷)
op.forEach((item, index)=>{
    item.addEventListener("click", (event)=>{
        if(event.target.innerText == '+'){
            //輸入第一次，儲存在firstNumber之後清除
            firstNumber = parseInt(secNumber) + parseInt(firstNumber);
            text.value = firstNumber;
        }
        else if(event.target.innerText == '-'){
            firstNumber = parseInt(firstNumber) - parseInt(secNumber);
            text.value = firstNumber;
            // text.value = "";
        }
        else if(event.target.innerText == 'x'){
            firstNumber = parseInt(secNumber) * parseInt(firstNumber);
            text.value = firstNumber;
            // text.value = "";
        }
        else if(event.target.innerText == '/'){
            firstNumber = parseInt(secNumber) / parseInt(firstNumber);
            text.value = firstNumber;
            // text.value = "";
        }
        else if(event.target.innerText == '%'){
            firstNumber = parseInt(secNumber) % parseInt(firstNumber);
            text.value = firstNumber;
            // text.value = "";
        }
        secNumber = firstNumber;
        firstNumber = "";
    });
});


//全部清除
clear.addEventListener("click", (event)=>{
    text.value = "";
});

//單獨清除
del.addEventListener("click", (event)=>{
    //substr() 截斷字串 1.從那個位子開始 2.裁取多少長度
    text.value = text.value.substr(0,text.value.length - 1);
});

//等於(運算執行)

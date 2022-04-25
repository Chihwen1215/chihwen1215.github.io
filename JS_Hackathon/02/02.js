let numbers = document.querySelectorAll(".number");
// let op = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let text = document.getElementById("input-text");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");
let percent = document.querySelector(".percent");


//數字輸入區
numbers.forEach(number=>{
    //number 加入 click 事件
    number.addEventListener("click", function(event){
        btnNumber();
    });
});

//把點擊的數字或符號顯示在畫面上
function btnNumber(){
    let firstNumber = event.target.innerText;
    text.value += firstNumber;
}


//加
plus.addEventListener("click", function(event){
    btnNumber();
});

//減
minus.addEventListener("click", function(event){
    btnNumber();
});

//乘
multiply.addEventListener("click", function(event){
    btnNumber();
});

//除
division.addEventListener("click", function(event){
    btnNumber();
});

//%
percent.addEventListener("click", function(event){
    btnNumber();
});


//全部清除
clear.addEventListener("click", function(){
    text.value = "";
});


//單獨清除
del.addEventListener("click", function(event){
    //substr() 截斷字串 1.從那個位子開始 2.裁取多少長度
    text.value = text.value.substr(0,text.value.length - 1);
});


//等於(運算執行)
equal.addEventListener("click", (event)=>{
    btnEqual();
});

function btnEqual(){
    // eval() 自動計算 算術表達式
    text.value = eval(text.value);
};
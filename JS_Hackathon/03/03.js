let start,reset,answer,blank;
let randomArray = [];
let random;
let guess;
let input;

window.onload = function(){
    start = document.getElementById("btn1");
    reset = document.getElementById("btn2");
    answer = document.getElementById("btn3");
    guess = document.getElementById("button-addon2");
    input = document.querySelector(".form-control");
    blank = document. querySelector(".blank");

    start.addEventListener("click", ()=>{
        btnStart();
    });

    //按開始紐，會出現一組亂數答案
    function btnStart(){
        //答案最多只能產出4個數字
        for(let i = 0; randomArray.length < 4; i++){
            //限制亂數範圍為0~9
            random = Math.floor(Math.random() * 10);
            //確認數字是否有重複，如果有重複就繼續跑亂數
            if(randomArray.includes(random)){
                continue;
            }
            else
            {
                randomArray.push(random);
            }
        }
    };

    reset.addEventListener("click", ()=>{
        //整個畫面更新
        location.reload();
    });

    answer.addEventListener("click", ()=>{
        alert(`Answer : ${randomArray}`);
    });


    guess.addEventListener("click", ()=>{
        //宣告 a,b 的次數初始化為0
        let a = 0;
        let b = 0;

        let inputArray = Array.from(input.value);
        

        //比 A 的地方， 4A0B ，位置對數字也對(正向0~3)
        for(let i = 0; i < 4; i++){
            if(randomArray[i] == inputArray[i]){
                a++;
            }
            //比 B 的地方，位置錯數字對(反向3~0)
            for(let j = 3; j >= 0; j--){
                if(randomArray[i] == inputArray[j]){
                    b++;
                }
            }
        }

        //blank區
        let record = document.createElement("div");
        record.setAttribute("class", "record");

        //幾A幾B區(左)
        let AB = document.createElement("div");
        AB.setAttribute("class", "AB");
        //AB寫入 幾A幾B區 轉純文字
        //b-a條件 幾A幾B 就是幾加幾不能>4(次數總和不能大於4)
        AB.innerText = `${a}A${b-a}B`;
        record.appendChild(AB);
        blank.appendChild(record);

        // 比次數
        if(a==4){
            AB.setAttribute("style", "background-color:green");
            alert(`猜對了`)
        }

        //記錄使用者輸入的數字區(右)
        let recordInput = document.createElement("div");
        recordInput.setAttribute("class", "recordInput");
        recordInput.innerText = input.value;
        record.appendChild(recordInput);
        blank.appendChild(record);


    });


};
//UI
let container = document.querySelector(".container")
let input = document.querySelector("#text")
let btn = document.querySelector("#button-addon2")
let row = document.querySelector(".row")

//資料
let cardTemplate = document.getElementById('cardTemplate')
let dataArray = []
let key = "dataArray"

function refreshUI(){
    row.innerHTML = ""
    if(localStorage.getItem(key) != null){
                                        //以key抓值
        dataArray = JSON.parse(localStorage.getItem(key))
        dataArray.forEach((dataObj, index) =>{
            row.append(getButton(dataObj, index))
        })
    }
}

window.onload = function(){

    refreshUI()

    //新增按鈕事件
    btn.addEventListener("click", ()=>{
        let dataObj = {"text":input.value }
        
        row.append(getButton( dataObj , dataArray.length))
        input.value = "";

        dataArray.push( dataObj )
        localStorage.setItem(key, JSON.stringify(dataArray))
    });

}


function getButton(dataObj, index) {
    let cloneCard = cardTemplate.content.cloneNode(true)
    let tem_container = cloneCard.querySelector(".tem_container")
    let checkBox = cloneCard.querySelector(".form-check-input")
    //輸入文字 進代辦事項
    let inputText = cloneCard.querySelector(".inputText")
    inputText.value = dataObj.text

    let  edit = cloneCard.querySelector("#edit")
    let  save = cloneCard.querySelector("#save")
    let del = cloneCard.querySelector("#del")


    //編輯按鈕
    edit.addEventListener("click", ()=>{
        save.style.display="block"
        edit.style.display="none"
        //代辦事項裡的輸入框要解鎖
        inputText.removeAttribute("disabled")
    })

    //保存按鈕
    save.addEventListener("click", ()=>{
        save.style.display="none"
        edit.style.display="block"
        //對應畫面位置的資料
        dataArray[dataObj] = {"text": input.value}
        console.log(dataArray[dataObj])

        localStorage.setItem(key, JSON.stringify(dataArray))
        //代辦事項裡的輸入框要鎖定
        inputText.disabled = true
    })

    //刪除按鈕
    del.addEventListener("click", ()=>{
        dataArray.splice(index, 1)
        localStorage.setItem(key, JSON.stringify(dataArray))
        refreshUI()
    })

    return cloneCard
}
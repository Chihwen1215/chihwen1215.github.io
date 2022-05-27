//UI
let container = document.querySelector(".container")
let input = document.querySelector("#text")
let btn = document.querySelector("#button-addon2")
let row = document.querySelector(".row")

//資料
let cardTemplate = document.getElementById('cardTemplate')
let dataArray = []
// let key = 1

window.onload = function(){

    btn.addEventListener("click", ()=>{
        getButton()

    });
}

function getButton() {
    let cloneCard = cardTemplate.content.cloneNode(true)
    let tem_container = cloneCard.querySelector(".tem_container")
    let checkBox = cloneCard.querySelector(".form-check-input")
    let inputText = cloneCard.querySelector(".inputText")
    let  edit = cloneCard.querySelector("#edit")
    let  save = cloneCard.querySelector("#save")
    save.style.display="none"
    let del = cloneCard.querySelector("#del")

    row.append(cloneCard)
    container.append(row)

    //輸入文字 進代辦事項
    inputText.value = input.value
    //清空
    input.value = ""
    //代辦事項裡的輸入框要鎖定
    inputText.disabled = true


                    //存物件的地方
    let object = {id: key++, data: inputText.value, checkBox: "disabled"}
    dataArray.push(object)
    localStorage.setItem("data",JSON.stringify(dataArray))



    //編輯按鈕
    edit.addEventListener("click", ()=>{
        edit.style.display="none"
        save.style.display="block"
        //代辦事項裡的輸入框要解鎖
        inputText.disabled = false
    })

    //保存按鈕
    save.addEventListener("click", ()=>{
        save.style.display="none"
        edit.style.display="block"
        // localStorage.setItem( a, JSON.stringify(inputText.value) )
        inputText.disabled = true
    })

    //刪除按鈕
    del.addEventListener("click", ()=>{
        tem_container.remove();

    })


}
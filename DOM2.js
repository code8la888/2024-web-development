/*
練習題2：DOM事件處理
    題目描述：創建一個包含兩個按鈕的HTML頁面，其中一個按鈕用於顯示警告訊息，
    另一個按鈕用於在頁面上添加一個新段落元素。實現這兩個按鈕的點擊事件處理。

    要求：
    使用addEventListener()來監聽按鈕的點擊事件。
    使用window.alert()來顯示警告訊息。
    使用document.createElement()和appendChild()來動態添加新元素。
*/

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let mydiv = document.querySelector("div");

let text;
btn1.addEventListener("click", () => {
  text = prompt("我是警告訊息");
});

btn2.addEventListener("click", () => {
  let addP = document.createElement("p"); //建立一個p標籤
  addP.innerText = text; //更改p標籤裡面的內容
  mydiv.appendChild(addP); //選取div標籤，並在div標籤裡面新增元素
});

/*
題目描述：
    創建一個網頁，包含一個文本輸入框和一個提交按鈕。
    當用戶輸入文本並點擊提交按鈕後，在頁面上顯示輸入的文本內容。

    要求：
    使用event.preventDefault()來防止表單提交的預設行為。
    使用document.getElementById()來選取文本輸入框的值並動態顯示。
*/

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  let myInput = document.getElementById("input").value;
  let add = document.createElement("p");
  let mydiv2 = document.querySelector("div.ex2");
  add.innerHTML = myInput;
  mydiv2.appendChild(add);
});

/*
1.題目描述：利用JavaScript創建一個簡單的HTML頁面，該頁面包含一個<div>元素和一個按鈕。
    當用戶點擊按鈕時，將<div>中的內容動態更新為“Hello, DOM!”。
    要求：
    使用document.getElementById()來選取<div>元素。
    使用innerHTML或innerText屬性來更新<div>的內容。
*/

let mydiv = document.querySelector("div");
let mybtn = document.querySelector(".btn");
mybtn.addEventListener("click", () => {
  mydiv.innerHTML = "<div>Hello,DOM!</div>";
});

/*
2.題目描述：在頁面中創建一個包含多個<li>元素的無序列表。利用document.querySelectorAll()選取所有的<li>元素，並將它們的背景顏色更改為藍色。
            要求：
            使用forEach()來遍歷選取的所有<li>元素。
            改變元素的style屬性來實現背景顏色的更改。
*/

let myli = document.querySelectorAll("li");
myli.forEach((element) => {
  element.style.backgroundColor = "lightblue";
});

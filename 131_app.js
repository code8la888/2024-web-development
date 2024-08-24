// 建立一個物件
let Luna = {
  first_name: "Luna",
  last_name: "Tseng",
  age: 25,
  city: "Taichung",

  sayHi() {
    console.log("Hello");
  },

  walk() {
    console.log("Luna is walking");
    console.log(this.first_name + "is walking");
  },

  speak(word) {
    console.log("Luna說" + word);
    console.log(this.first_name + "說" + word);
  },
};

console.log(Luna.age);
console.log(Luna["city"]);

Luna.walk();
Luna.speak("吃飯了");

function hello() {
  console.log("我不屬於任何物件");
  console.log(this);
}

hello();

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //object

console.log(typeof hello); //fnction
//確認某一物件是否為陣列
console.log(Array.isArray(arr));
console.log(Array.isArray(hello));

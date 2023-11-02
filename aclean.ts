let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); //

function unique(arr) {
  return [...new Set(arr)];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values({});
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const student = Object.create(person); // Создаем новый объект student с person в качестве прототипа

student.firstName = "Alice"; // Добавляем свойство firstName в объект student

console.log(student.fullName()); // Вывод: "Alice Doe"
console.log(person.fullName()); // Вывод: "Alice Doe"
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);
console.log(map);
map.values() возвращает перебираемый объект. При переборе этого объекта (через for..of или другими способами) возвращаются значения одно за другим. В задаче необходимо вернуть массив, поэтому используется Array.from.

  Кстати, способов решения этого задания множество:

  через обычный объект
function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('')
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}

используя Set
function aclean(arr) {
  let set = new Set();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    if (!set.has(sorted)) {
      set.add(sorted);
      result.push(arr[i]);
    }
  }
  return result;
}

используя Map
function aclean(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, arr[i]);
    }
  }
  return Array.from(map.values());
}
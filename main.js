//Tính độ dài mảng: length
const courses = [
  "html",
  "css",
  "javascript",
  null,
  undefined
];

var coursesLength = courses.length;
console.log("Độ dài mảng:", courses.length);

/// Ví dụ 1: Lấy độ dài của mảng
let fruits = ["Táo", "Cam", "Chuối"];
console.log("Ví dụ 1 - Độ dài mảng fruits:", fruits.length); // 3

// Ví dụ 2: Truy cập phần tử cuối cùng bằng length
let numbersArray0 = [5, 10, 15, 20];
let last = numbersArray0[numbersArray0.length - 1];
console.log("Ví dụ 2 - Phần tử cuối:", last); // 20

// Ví dụ 3: Thêm phần tử vào cuối mảng
let namesArray0 = ["An", "Bình"];
namesArray0[namesArray0.length] = "Châu";
console.log("Ví dụ 3 - Mảng sau khi thêm:", namesArray0); // ["An", "Bình", "Châu"]

// Ví dụ 4: Rút gọn mảng bằng cách thay đổi length
let items = [1, 2, 3, 4, 5];
items.length = 3;
console.log("Ví dụ 4 - Mảng sau khi rút gọn:", items); // [1, 2, 3]

// Ví dụ 5: Kiểm tra mảng có rỗng không
let empty = [];
if (empty.length === 0) {
  console.log("Ví dụ 5 - Mảng đang rỗng");
}


//Thêm phàn tử vào cuối mảng: push
const players = ["Ronaldo", "Messi", "Benzema"];
var newLengthPlayers = players.push("Zidane");
console.log("newLengthPlayers: ", newLengthPlayers);
console.log("players: ", players);


// Ví dụ1: Thêm phần tử vào mảng số nguyên
let numbers = [1, 2, 3];
numbers.push(4);
console.log("Mảng sau khi thêm 4:", numbers);

// Ví dụ2: Thêm tên vào danh sách học sinh
let students = ["An", "Bình"];
students.push("Chi", "Dũng");
console.log("Danh sách học sinh:", students);

// Ví dụ3: Sử dụng push trong vòng lặp
let squares = [];
for (let i = 1; i <= 5; i++) {
  squares.push(i * i);
}
console.log("Các số bình phương:", squares);

// Ví dụ4: Push mảng con vào mảng lớn
let matrix = [];
matrix.push([1, 2]);
matrix.push([3, 4]);
console.log("Ma trận:", matrix);

// Ví dụ5: Kiểm tra số lượng phần tử sau khi push
let colors = ["red", "green"];
colors.push("blue");
console.log("Số lượng màu là:", colors.length);

//Xóa phân tử cuối mảng: pop
var newCourses = courses.pop(); 
console.log("🚀 ~ newCourses:", newCourses);

var newCourses2 = courses.pop(); 

courses.pop();
courses.pop();
courses.pop();
courses.pop();
courses.pop();
courses.pop();
courses.pop();
console.log("newCourses2:", newCourses2);
console.log("courses:", courses);

// Ví dụ1: Xoá phần tử cuối cùng trong mảng số
let nums = [10, 20, 30];
nums.pop();
console.log("Mảng sau khi xoá phần tử cuối:", nums);

// Ví dụ2: Xoá tên học sinh cuối cùng
let classmates = ["Lan", "Mai", "Hưng"];
let removedName = classmates.pop();
console.log("Tên bị xoá:", removedName);
console.log("Danh sách còn lại:", classmates);

// Ví dụ3: Pop trong vòng lặp
let tasks = ["Task1", "Task2", "Task3"];
while (tasks.length > 0) {
  console.log("Đang xoá:", tasks.pop());
}

// Ví dụ4: Kiểm tra phần tử bị xoá
let colors2 = ["blue", "yellow", "pink"];
let lastColor = colors2.pop();
console.log("Màu bị xoá:", lastColor);
console.log("Mảng sau khi xoá:", colors2);

// Ví dụ5: Xoá phần tử cho đến khi mảng rỗng
let stack = [1, 2, 3, 4];
while (stack.length > 0) {
  stack.pop();
}
console.log("Mảng sau khi xoá hết:", stack);


//Thêm 1 hoặc nhiều phần tử vào đầu mảng: unshift()
courses.unshift("mysql", "mysql2", "mysql3");
console.log("courses:", courses); 

// 5. Xóa 1 hoặc nhiều phần tử đầu mảng shift()
courses.shift();
courses.shift();
courses.shift();
// console.log("courses:", courses);

// Ví dụ 1: Xóa phần tử đầu tiên khỏi mảng số
let numbersArray = [10, 20, 30];
let first = numbersArray.shift();
console.log("Ví dụ 1 - Phần tử bị xóa:", first);       // Output: 10
console.log("Ví dụ 1 - Mảng sau khi shift:", numbersArray); // Output: [20, 30]

// Ví dụ 2: Dùng shift với mảng chuỗi
let fruitsArray = ["Táo", "Chuối", "Xoài"];
let removed = fruitsArray.shift();
console.log("Ví dụ 2 - Phần tử bị xóa:", removed);     // Output: Táo
console.log("Ví dụ 2 - Mảng còn lại:", fruitsArray);        // Output: ["Chuối", "Xoài"]

// Ví dụ 3: Dùng shift trong vòng lặp while
let queue = ["Người 1", "Người 2", "Người 3"];
while (queue.length > 0) {
  let served = queue.shift();
  console.log("Ví dụ 3 - Phục vụ:", served);
}
console.log("Ví dụ 3 - Hàng đợi rỗng:", queue);         // Output: []

// Ví dụ 4: Shift trên mảng rỗng
let emptyArr = [];
let result = emptyArr.shift();
console.log("Ví dụ 4 - Giá trị trả về:", result);       // Output: undefined
console.log("Ví dụ 4 - Mảng sau shift:", emptyArr);     // Output: []

// Ví dụ 5: Kết hợp shift và push để xử lý hàng đợi
let tasksArray = ["Task A", "Task B"];
let currentTask = tasksArray.shift();
console.log("Ví dụ 5 - Đang xử lý:", currentTask);      // Output: Task A
tasksArray.push("Task C");
console.log("Ví dụ 5 - Danh sách còn lại:", tasksArray);     // Output: ["Task B", "Task C"]


//Cắt phần tử mảng theo index: silce
const courses2 = [
  "html", // 0
  "css", // 1
  "javascript", // 2
];

var newArr = courses2.slice(0, 1); 
console.log("🚀 ~ newArr:", newArr)

// Ví dụ 1: Cắt mảng số từ vị trí 1 đến 3 (không bao gồm vị trí 3)
let arr1 = [5, 10, 15, 20, 25];
let result1 = arr1.slice(1, 3);
console.log("Ví dụ 1 - Kết quả:", result1);    // [10, 15]
console.log("Ví dụ 1 - Mảng gốc:", arr1);      // [5, 10, 15, 20, 25]

// Ví dụ 2: Lấy phần cuối mảng chuỗi
let names = ["An", "Bình", "Chi", "Dũng"];
let lastTwo = names.slice(-2);
console.log("Ví dụ 2 - Hai phần tử cuối:", lastTwo); // ["Chi", "Dũng"]

// Ví dụ 3: Cắt mảng từ đầu đến vị trí 2 (không gồm vị trí 2)
let colorsArray = ["Đỏ", "Xanh", "Vàng", "Tím"];
let primary = colorsArray.slice(0, 2);
console.log("Ví dụ 3 - Kết quả:", primary); // ["Đỏ", "Xanh"]

// Ví dụ 4: Sao chép toàn bộ mảng bằng slice
let original = [1, 2, 3, 4];
let copy = original.slice();
copy.push(5);
console.log("Ví dụ 4 - Bản sao:", copy);       // [1, 2, 3, 4, 5]
console.log("Ví dụ 4 - Mảng gốc:", original);  // [1, 2, 3, 4]

// Ví dụ 5: Cắt chuỗi ký tự (vì string cũng dùng được slice)
let word = "Javascript";
let part = word.slice(4, 10);
console.log("Ví dụ 5 - Kết quả:", part);       // "script"


//Thêm/xóa phần tử mảng tại vị trí bất kỳ]
const courses4 = [
  "html", // 0
  "css", // 1
  "javascript" // 2,
];

const courses5 = [
  "html",
  "scss",
  "javascript",
];

courses4.splice(1, 1, "scss");
console.log(courses4);

// Ví dụ 1: Xóa phần tử tại vị trí 2
let list1 = ["A", "B", "C", "D"];
let removed1 = list1.splice(2, 1);
console.log("Ví dụ 1 - Đã xóa:", removed1);    // ["C"]
console.log("Ví dụ 1 - Mảng còn lại:", list1); // ["A", "B", "D"]

// Ví dụ 2: Thêm phần tử mới vào vị trí 1
let animalsArray1 = ["Chó", "Mèo", "Heo"];
animalsArray1.splice(1, 0, "Vịt");
console.log("Ví dụ 2 - Mảng sau khi thêm:", animalsArray1); // ["Chó", "Vịt", "Mèo", "Heo"]

// Ví dụ 3: Thay thế phần tử ở vị trí 0
let fruitsArray1 = ["Táo", "Chuối", "Xoài"];
fruitsArray1.splice(0, 1, "Lê");
console.log("Ví dụ 3 - Mảng sau khi thay:", fruits); // ["Lê", "Chuối", "Xoài"]

// Ví dụ 4: Xóa 2 phần tử từ vị trí 1 và chèn thêm 2 phần tử mới
let numsArray1 = [1, 2, 3, 4, 5];
let changed = numsArray1.splice(1, 2, 8, 9);
console.log("Ví dụ 4 - Phần bị xóa:", changed); // [2, 3]
console.log("Ví dụ 4 - Mảng sau thay:", nums);  // [1, 8, 9, 4, 5]

// Ví dụ 5: Xóa tất cả phần tử từ vị trí 3 trở đi
let letters = ["a", "b", "c", "d", "e"];
let removedAll = letters.splice(3);
console.log("Ví dụ 5 - Đã xóa:", removedAll);   // ["d", "e"]
console.log("Ví dụ 5 - Còn lại:", letters);     // ["a", "b", "c"]


//Lặp các phần tử trong mảng: forEach
// Ví dụ 1: In từng phần tử trong mảng số
let numsArray = [10, 20, 30];
numsArray.forEach(num => console.log("Ví dụ 1 - Số:", num));

// Ví dụ 2: Cộng dồn giá trị trong mảng
let valuesArray = [2, 4, 6];
let sum = 0;
valuesArray.forEach(val => sum += val);
console.log("Ví dụ 2 - Tổng:", sum); // 12

// Ví dụ 3: In chỉ số và giá trị trong mảng chuỗi
let animalsArray = ["Chó", "Mèo", "Vịt"];
animalsArray.forEach((animal, index) => console.log(`Ví dụ 3 - ${index}: ${animal}`));

// Ví dụ 4: Tạo mảng mới chứa chữ in hoa
let namesArray = ["anh", "bình", "châu"];
let upperNames = [];
namesArray.forEach(name => upperNames.push(name.toUpperCase()));
console.log("Ví dụ 4 - Chữ in hoa:", upperNames); // ["ANH", "BÌNH", "CHÂU"]

// Ví dụ 5: Duyệt object bằng Object.entries và arrow function
let student = { name: "Minh", age: 18, grade: "A" };
Object.entries(student).forEach(([key, value]) => console.log(`Ví dụ 5 - ${key}: ${value}`));


//Tìm phần tử đầu tiên trong mảng thỏa mãn điều kiện: find
// Ví dụ 1: Tìm số đầu tiên lớn hơn 50
let numbersArray2 = [10, 25, 60, 80];
let firstBig = numbersArray2.find(num => num > 50);
console.log("Ví dụ 1 - Số đầu tiên > 50:", firstBig); // 60

// Ví dụ 2: Tìm tên có độ dài lớn hơn 4 ký tự
let namesArray2 = ["An", "Bình", "Chi", "Dũng"];
let longName = namesArray2.find(name => name.length >= 4);
console.log("Ví dụ 2 - Tên dài hơn 4 ký tự:", longName); // "Bình"

// Ví dụ 3: Tìm phần tử chẵn đầu tiên
let values = [3, 7, 9, 12, 15];
let even = values.find(x => x % 2 === 0);
console.log("Ví dụ 3 - Số chẵn đầu tiên:", even); // 12

// Ví dụ 4: Tìm sinh viên có điểm A
let studentsArray2 = [
  { name: "Lan", grade: "B" },
  { name: "Hải", grade: "A" },
  { name: "Minh", grade: "C" }
];
let topStudent = studentsArray2.find(sv => sv.grade === "A");
console.log("Ví dụ 4 - Sinh viên điểm A:", topStudent); // { name: "Hải", grade: "A" }

// Ví dụ 5: Tìm số âm đầu tiên trong mảng
let data = [5, 3, 0, -2, -5];
let firstNegative = data.find(n => n < 0);
console.log("Ví dụ 5 - Số âm đầu tiên:", firstNegative); // -2


//Trả về true nếu có ít nhất 1 phần tử trong mảng thỏa mãn điều kiện: some
// Ví dụ 1: Kiểm tra mảng có số chẵn hay không
let numsArray3 = [1, 3, 5, 8];
let hasEven = numsArray3.some(n => n % 2 === 0);
console.log("Ví dụ 1 - Có số chẵn không?", hasEven); // true

// Ví dụ 2: Kiểm tra có ai trên 18 tuổi
let ages = [12, 16, 21, 14];
let hasAdult = ages.some(age => age >= 18);
console.log("Ví dụ 2 - Có người >= 18 tuổi?", hasAdult); // true

// Ví dụ 3: Kiểm tra mảng chứa tên bắt đầu bằng chữ H
let namesArray3 = ["An", "Bình", "Huy", "Châu"];
let startsWithH = namesArray3.some(name => name.startsWith("H"));
console.log("Ví dụ 3 - Có tên bắt đầu bằng H?", startsWithH); // true

// Ví dụ 4: Kiểm tra mảng rỗng có phần tử > 100 không
let emptyArray = [];
let resultArray = emptyArray.some(x => x > 100);
console.log("Ví dụ 4 - Mảng rỗng có số > 100 không?", resultArray); // false

// Ví dụ 5: Kiểm tra danh sách sản phẩm có hàng tồn kho
let products = [
  { name: "Áo", stock: 0 },
  { name: "Quần", stock: 5 },
  { name: "Giày", stock: 0 }
];
let inStock = products.some(item => item.stock > 0);
console.log("Ví dụ 5 - Có sản phẩm còn hàng không?", inStock); // true



const students4 = [
  {
    id: 1,
    name: "Hoan Nguyen",
    age: 24,
    address: "Cau Giay, HN"
  },
  {
    id: 2,
    name: "Thuan Pham",
    age: 20,
    address: "Tien Hai, Thai Binh"
  },
  {
    id: 3,
    name: "Minh Hoàng",
    age: 22,
    address: "An Dương, Hai Phong"
  }
];


function getElement(selector) {
  return document.querySelector(selector);
};

const listElement = getElement("ul");

function renderUI() {
  let html = "";
  let students4Length = students4.length;
  for(i = 0; i < students4Length; i++) {
    html += `
      <li>
          <p>id: ${students4[i].id}</p>
          <p>name: ${students4[i].name}</p>
          <p>age: ${students4[i].age}</p>
          <p>address: ${students4[i].address}</p>
      </li>
      <button class="btn-edit" onclick="editStudent(${students4[i].id - 1})">Sửa sinh viên</button>
      <button class="btn-delete" onclick="deleteStudent(${students4[i].id -1})">Xóa sinh viên</button>
    `
  }
  listElement.innerHTML = html;
}


// Khi website tải xong, hiển thị sản phẩm 
document.addEventListener("DOMContentLoaded", () => {
  renderUI();
});

function deleteStudent(id) {
  students4.splice(id, 1);
  let students4Length = students4.length;
  for(i = 0; i < students4Length; i++) {
    students4[i].id = i + 1;
  }
  console.log(students4);
  renderUI();
}

function editStudent(id) {
  students4[id].age = "28";
  students4[id].name = "Tuấn";
  students4[id].address = "Hải Phòng";
  renderUI();
}

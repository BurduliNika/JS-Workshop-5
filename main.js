const arr = [
  [150, 20, 10],
  [55, 11, 260, 45],
  [1, 28],
];

// დინამიურად ვითვლით თითოეული შიდა მასივის ჯამს reduce-ით
const sum1 = arr[0].reduce((acc, num) => acc + num, 0);
const sum2 = arr[1].reduce((acc, num) => acc + num, 0);
const sum3 = arr[2].reduce((acc, num) => acc + num, 0);

// ყველა ელემენტის ჯამი (ფლეტ + რედიუს)
const totalSum = arr.flat().reduce((acc, num) => acc + num, 0);

console.log(sum1); // 180
console.log(sum2); // 371
console.log(sum3); // 29
console.log(totalSum); // 580
const students = [
  { id: 1, name: "Ana", grades: [85, 90, 78], isActive: true },
  { id: 2, name: "Luka", grades: [60, 75, 70], isActive: false },
  { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true },
  { id: 4, name: "Gio", grades: [40, 55, 48], isActive: true },
];

// 1. მხოლოდ სახელები დიდი ასოებით
const upperCaseNames = students.map((student) => student.name.toUpperCase());
console.log(upperCaseNames);
// ["ANA", "LUKA", "MAYA", "GIO"]

// 2. მხოლოდ აქტიური სტუდენტები
const activeStudents = students.filter((student) => student.isActive);
console.log(activeStudents);

// 3. სტუდენტების სტატუსის დალოგვა
students.forEach((student) => {
  const status = student.isActive
    ? "არის აქტიური სტუდენტი"
    : "არ არის აქტიური სტუდენტი";
  console.log(`${student.name} ${status}`);
});
/*
  Ana არის აქტიური სტუდენტი
  Luka არ არის აქტიური სტუდენტი
  Maya არის აქტიური სტუდენტი
  Gio არის აქტიური სტუდენტი
  */

// 4. ყველა სტუდენტს აქვს თუ არა საშუალო 50-ზე მეტი?
const average = (grades) => grades.reduce((a, b) => a + b) / grades.length;

const allAbove50 = students.every((student) => average(student.grades) > 50);
console.log(allAbove50); // true

// 5. ერთ სტუდენტს მაინც აქვს თუ არა 90-ზე მეტი საშუალო?
const someoneAbove90 = students.some((student) => average(student.grades) > 90);
console.log(someoneAbove90); // true (Maya-ს აქვს 91.67)

// 6. ვპოულობთ სტუდენტს სახელით "Maya"
const mayaStudent = students.find((student) => student.name === "Maya");
console.log(mayaStudent);
// { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true }

console.log(typeof undefined);
console.log(typeof null);

const firstName = "Nazar";
const lastNmae = "Martiniuk";

console.log(firstName, lastNmae);

let age = 20;
console.log(age);

let x = 1;

let b = ++x;
console.log(b);

console.log("Hello" + " world!");

console.log(2 + Number("2"));

if (5 === 5 && 2 === 3) {
  console.log("false");
} else if (5 === 5 && 2 === 2) {
  console.log("true");
}

if (5 === 4 || 2 === 5) {
  console.log("false");
} else if (5 === 4 || 2 === 2) {
  console.log("true");
}

let salary = 2000;

if (salary > 3000) {
  console.log(">3000");
} else if (salary > 2000) {
  console.log(" >2000");
} else if (salary === 2000) {
  console.log("2000");
} else {
  console.log("else...");
}

let status = "idle";

switch (status) {
  case "idle":
    console.log("idle");
    break;
  case "idle":
    console.log("idle");
    break;
  case "error":
    console.log("error");
    break;
  default:
    console.log("default");
}

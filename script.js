let user = {
  name: "Nazar",
  surname: "Martiniuk",
  age: 20,
  skills: ["JS", "HTML", "CSS"],
  isMarried: false,
  addAge: function () {
    this.age = 21;
  },
};
user.addAge();

for (let key in user) {
  console.log(key, user[key]);
}

let numbers = [1, 2, 3, 4, 5];
for (let key of numbers) {
  console.log(key);
}

let str = "Nazzik Mart";

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("Mart"));
console.log(str.indexOf("Nazzik"));
console.log(str.slice(0, 4));

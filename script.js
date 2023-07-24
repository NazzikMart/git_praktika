// function declaration

function logs() {
  console.log("declaration");
}

logs();

// function expression
const sum = function () {
  console.log("expression");
};

sum();

// IIFE
(function () {
  console.log("IIFE");
})();

// Arrow function
const arrow = () => {
  console.log("Arrow");
};

arrow();

// Arrow function 2

const arrow2 = () => console.log("Arrow2");
arrow2();

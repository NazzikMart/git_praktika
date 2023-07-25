function twoSquared() {
  return 2 * 2;
}
twoSquared();

function copyArrayAndSquareNums(arr) {
  const outpot = [];

  for (let index = 0; index < arr.length; index++) {
    outpot.push(arr[index] * arr[index]);
  }

  return outpot;
}

let mass = [1, 2, 3, 4, 5];

let res = copyArrayAndSquareNums(mass);
console.log(res);

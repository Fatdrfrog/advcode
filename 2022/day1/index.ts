export const x = "";

const input = await Deno.readTextFile("./input.txt");

const arrayOfInputs = input.split("\r\n");

let sum = 0;

const arr: number[] = [];
arrayOfInputs.forEach((el) => {
  if (parseInt(el) > 0) {
    sum += parseInt(el);
  } else {
    arr.push(sum);
    sum = 0;
  }
});

function compareNumbers(a: number, b: number) {
  return a - b;
}

arr.sort(compareNumbers);

console.log(arr[0], arr[1], arr[2]);
let sum2 = 0;
for (let i = arr.length - 1; i >= arr.length - 3; i--) {
  sum2 += arr[i];
}

console.log(sum2);

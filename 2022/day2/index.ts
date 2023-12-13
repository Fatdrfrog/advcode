const input = await Deno.readTextFile("./input.txt");

const arrayOfInputs = input.split("\r\n");

let sum = 0;
for (let i = 0; i < arrayOfInputs.length; i++) {
  const firstPlayer = arrayOfInputs[i][0];
  const secondPlayer = arrayOfInputs[i][2];

  const left = firstPlayer === "A" ? 1 : firstPlayer === "B" ? 2 : 3;

  const right = secondPlayer === "X" ? 1 : secondPlayer === "Y" ? 2 : 3;

  const diff =
    right === 1
      ? left === 1
        ? 3
        : left === 2
        ? 1
        : 2
      : right === 2
      ? left + 3
      : right === 3
      ? left === 1
        ? 8
        : left === 2
        ? 9
        : 7
      : 0;

  sum += diff;
}
console.log(sum);

const input = await Deno.readTextFile("./input.txt");

const arrayOfInputs = input.split("\r\n");

let sum = 0;
for (let i = 0; i < arrayOfInputs.length; i++) {
  const leftFirst = parseInt(
    arrayOfInputs[i].slice(0, arrayOfInputs[i].indexOf("-"))
  );

  const rightFirst = parseInt(
    arrayOfInputs[i].slice(
      arrayOfInputs[i].indexOf("-") + 1,
      arrayOfInputs[i].indexOf(",")
    )
  );

  const leftSecond = parseInt(
    arrayOfInputs[i].slice(
      arrayOfInputs[i].indexOf(",") + 1,
      arrayOfInputs[i].lastIndexOf("-")
    )
  );

  const rightSecond = parseInt(
    arrayOfInputs[i].slice(
      arrayOfInputs[i].lastIndexOf("-") + 1,
      arrayOfInputs[i].length
    )
  );

  if (!(rightFirst < leftSecond || leftFirst > rightSecond)) {
    sum++;
  }
}

console.log(sum);

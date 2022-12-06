const input = await Deno.readTextFile("./input.txt");

const arrayOfInputs = input.split("\r\n");

let sum = 0;
for (let i = 0; i < arrayOfInputs.length; i += 3) {
  const group: string[] = [];

  for (let j = i; j < i + 3; j++) {
    group.push(arrayOfInputs[j]);
  }

  const filteredChar = group[0]
    .split("")
    .filter((el) => group[1].includes(el) && group[2].includes(el))[0]
    .charCodeAt(0);

  //A = 65 , a= 97
  const number =
    filteredChar < 97 ? filteredChar - 65 + 27 : filteredChar - 97 + 1;
  sum += number;
}
console.log(sum);

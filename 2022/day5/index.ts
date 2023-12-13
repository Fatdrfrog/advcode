const input = await Deno.readTextFile("./input2.txt");

const arrayOfInputs = input.split("\r\n");

const block = {};

let k = 1;
for (let i = 2; i >= 0; i--) {
  for (let j = 0; j <= 2; j++) {
    if (arrayOfInputs[i][k] !== " ") {
      if (block[j]) {
        block[j] += arrayOfInputs[i][k];
      } else {
        block[j] = arrayOfInputs[i][k];
      }
    }
    k += 4;
  }
  k = 1;
}

for (let i=5;i<arrayOfInputs.length-1;i++) {
  block["то что из 12"] мув в block["то что из 17"];

  //5
  //12
  //17

}

console.log(block);

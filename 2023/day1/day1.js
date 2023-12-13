const  fs= require('fs');

const numStrings = ['one','two','three','four','five','six','seven','eight','nine']

fs.readFile("./input.txt","utf-8",(err,data)=>{

    const arr = data.split("\r\n");
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        let currSum = 0;
        for(let j = 0; j<arr[i].length;j++){
            if(Number(arr[i][j])){
                currSum+=arr[i][j];
                break;
            }
        }
        for(let j = arr[i].length-1; j>=0;j--){
            if(Number(arr[i][j])){
                currSum+=arr[i][j];
                break;
            }
        }
        sum+=Number(currSum);
    }

    console.log(sum);
})
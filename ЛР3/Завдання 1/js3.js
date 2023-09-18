

//1
let selector = document.getElementById("paragraphs");

let text = selector.innerText;

let mass1 = text.split('')
console.log(mass1)



//2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let min = 9999;
let max = 0;
let pair = 0;
let unpair = 0;
let tChar = 0;
let pos = 0;
let neg = 0;

for(let i =0; i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
    if(max<arr[i]){
        max=arr[i];
    }
}

for(let i =0; i<arr.length;i++){
    if(i % 2 == 0){
        unpair++;
    }
    if(i % 2 != 0){
        pair++;
    }
}

for(let i =0; i<arr.length;i++){
    if(arr[i]>9&&arr[i]<99 || arr[i]>-9&&arr[i]<-99){
        tChar++;
    }
}

for(let i =0; i<arr.length;i++){
    if(arr[i]>0){
        pos++;
    }
    if(arr[i]<0){
        neg++;
    }
}

console.log(max)
console.log(min)

console.log(pair)
console.log(unpair)

console.log(tChar)

console.log(pos)
console.log(neg)

console.log(arr.sort())
console.log(arr.reverse())
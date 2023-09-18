let N = 5;
let M = 7;
let arr = [
    [-1, 2, 2, 3, 3],
    [4, 1, 6, 8, 4],
    [-7, 0, -9, 7, 5],
    [-1, 2, 3, 2, -6],
    [-1, 2, 2, 2, 2]
];
console.log(arr);
let countPos = 0;
let countNull1 = 0;
let countNull2 = 0;
let countT = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] >= 0)
            countPos++;
    }
}

//1
console.log("Кількість додатніх елементів: " + countPos);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] === 0) {
            countNull1++;
        }
    }
}


for (let i = 0; i < N; i++) {
    if (!arr[i].includes(0)) {
        countNull2++;
    }
}
//2
console.log("кількість рядків, які не містять жодного нульового елемента: " + countNull2);
//3
console.log("кількість стовпців, які містять хоча б один нульовий елемент: " + countNull1);

let longestSeriesRow = -1;
let longestSeriesLength = 0;

for (let i = 0; i < arr.length; i++) {
    let currentSeriesLength = 1;
    for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] === arr[i][j - 1]) {
            currentSeriesLength++;
        } else {
            currentSeriesLength = 1;
        }

        if (currentSeriesLength > longestSeriesLength) {
            longestSeriesLength = currentSeriesLength;
            longestSeriesRow = i;
        }
    }
}

//4
console.log("Номер рядка, в якому знаходиться найдовша серія однакових елементів: " + longestSeriesRow);


for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const hasNegative = row.some((num) => num < 0);

    if (!hasNegative) {
        const product = row.reduce((acc, num) => acc * num, 1);

        //5
        console.log("Добуток елементів в тих рядках, які не містять від’ємних елементів. Рядок: " + i +" || Сумма: "+ product);
    }
}

const rows = arr.length;
const columns = arr[0].length;
const columnSums = new Array(columns).fill(0); // Масив для зберігання сум відповідних стовпців

for (let j = 0; j < columns; j++) {
    let columnHasNegative = false; // Флаг, що показує, чи є від'ємні значення в стовпці

    for (let i = 0; i < rows && !columnHasNegative; i++) {
        if (arr[i][j] < 0) {
            columnHasNegative = true;
        } else {
            columnSums[j] += arr[i][j]; // Додаємо значення до суми стовпця
        }
    }

    if (!columnHasNegative) {
        //6
        console.log(`Сума елементів в тих стовпцях, які не містять від’ємних елементів;
        ${j + 1}: ${columnSums[j]}`);
    }
}

//7


let columnSum = 0;
let hasNegativeElement = false;

for (let col = 0; col < columns; col++) {
  for (let row = 0; row < rows; row++) {
    columnSum += arr[row][col];
    if (arr[row][col] < 0) {
      hasNegativeElement = true;
      break;
    }
  }
}

console.log("Cума елементів в тих стовпцях, які  містять хоча б один від’ємний елемент: "+columnSum);



//8
let transposedMatrix = [];

for (let j = 0; j < M; j++) {
    let transposedRow = [];
    for (let i = 0; i < N; i++) {
        transposedRow.push(arr[i][j]);
    }
    transposedMatrix.push(transposedRow);
}
transposedMatrix.pop()
transposedMatrix.pop()

console.log("Транспонована матриця:");
console.log(transposedMatrix);
 











import { readdir } from 'node:fs/promises';
let directory = process.argv[2]
let arr = await readdir(directory)
console.log(arr);
arr.sort()
for (let i = 1; i < arr.length; i++) {
    console.log(`${i}. ${arr[i][0].toUpperCase()}${arr[i].slice(1)}\n`);
}
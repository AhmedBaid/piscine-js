import { readFile } from "fs/promises";
const content = await readFile("verydisco-forever.txt", { encoding: 'utf8' })
let arr = content.split(" ")
console.log(arr);


let start
let end
let combine = ''
arr.forEach(element => {
    start = element.length % 2 === 0 ? element.slice(Math.ceil(element.length / 2)) : element.slice(Math.ceil(element.length / 2) - 1)

    end = element.length % 2 === 0 ? element.slice(0, Math.ceil(element.length / 2)) : element.slice(0, Math.ceil(element.length / 2) - 1)

    combine += start + end + ' '
});
let res = combine.trim()
console.log(res);

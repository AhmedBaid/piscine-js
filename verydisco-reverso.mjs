import { readFile } from "fs/promises";
let fileName = process.argv[2];

let content = await readFile(fileName, { encoding: 'utf8' })
let arr = content.split(" ")

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

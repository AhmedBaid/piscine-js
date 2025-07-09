import { readdir } from 'node:fs/promises';
let directory = process.argv[2]

if (!directory) {
    directory = process.cwd()
}
let files
try {
    files = await readdir(directory);
} catch (err) {
    console.log("Error", err);
}
console.log(files.length);

const args = process.argv.slice(2);
let arr = args[0].split(" ")

let start
let end
let combine = ''
arr.forEach(element => {
    start = element.slice(Math.ceil(element.length / 2))
    end = element.slice(0, Math.ceil(element.length / 2))
    combine += start + end + ' '
});
console.log(combine.trim());

const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const input_dir = path.join(__dirname, 'input_images')
const output_dir = path.join(__dirname, 'output_images')
const cmd_input = process.argv;
let imgFirst = "";
let imgSecound = "";
let maximg = Number.parseInt(cmd_input[3])
if (cmd_input[2] == 'jpg') {
    console.log("You are convert png to jpg ")
    imgFirst = 'png';
    imgSecound = 'jpg'
} else if (cmd_input[2] == 'png') {
    console.log("You are convert jpg to png")
    imgFirst = 'jpg';
    imgSecound = 'png'

} else {
    console.log("Please enter correct command")
    exit();
}
if (typeof maximg === 'number' && !Number.isNaN(maximg)) {
    console.log(maximg)

} else {
    console.log("you are run only 10 images")
    maximg = "11"
}
renamefile()

function renamefile() {
    for (let i = 1; i < maximg; i++) {
        fs.rename(input_dir + `/${i}.${imgFirst}`, output_dir + `/${i}.${imgSecound}`, (err, res) => {
            if (err) {
                console.log("Please enter input files or check command")
                exit();
            } else {
                console.log('Rename complete!');
            }

        })
    }
}
// adapted from https://github.com/tholman/s.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.strokeStyle = "red";
context.lineWidth = 3;

const x = (canvas.width / 2) - 40
const y = (canvas.width / 2) - 100
const w = 80
const h = 200
const tipHeight = h * 0.15
const lineHeight = h * 0.3
const joinHeight = h * 0.1

const instructions = [
  { callback: "moveTo", args: [x + w - w / 4, y + tipHeight + lineHeight + joinHeight / 2] },
  { callback: "lineTo", args: [x + w, y + tipHeight + lineHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w, y + tipHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x, y + tipHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x, y + tipHeight + lineHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y + tipHeight + lineHeight + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y + tipHeight + lineHeight * 2 + joinHeight] },
  { callback: "stroke" },
  { callback: "moveTo", args: [x + w / 4, y + tipHeight + lineHeight + joinHeight / 2] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x, y + tipHeight + lineHeight + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x, y + tipHeight + lineHeight * 2 + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y + tipHeight * 2 + lineHeight * 2 + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w, y + tipHeight + lineHeight * 2 + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w, y + tipHeight + lineHeight + joinHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y + tipHeight + lineHeight] },
  { callback: "stroke" },
  { callback: "lineTo", args: [x + w / 2, y + tipHeight] },
  { callback: "stroke" }
]

let index = 0
let timer = setInterval(() => {
  if (index < instructions.length) {
    const instruction = instructions[index]
    context[instruction.callback].apply(context, instruction.args)
  } else {
    clearInterval(timer)
  }
  index++
}, 250)
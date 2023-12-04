const funcButtons = [
  {
    name: "clear",
    symbol: "C",
    style: ["button", "wide-button"],
    op: false,
  },
  {
    name: "delete",
    symbol: "&#8592",
    style: ["button", "wide-button"],
    op: false,
  },
];

const operators = [
  {
    name: "add",
    symbol: "+",
    style: ["button"],
    op: true,
  },
  {
    name: "sub",
    symbol: "-",
    style: ["button"],
    op: true,
  },
  {
    name: "mul",
    symbol: "x",
    style: ["button"],
    op: true,
  },
  {
    name: "div",
    symbol: "/",
    style: ["button"],
    op: true,
  },

  {
    name: "exp",
    symbol: "x<sup>y</sup>",
    style: ["button"],
    op: true,
  },

  {
    name: "sqrt",
    symbol: "&#8730;x",
    style: ["button"],
    op: true,
  },
  {
    name: "square",
    symbol: "x<sup>2</sup>",
    style: ["button"],
    op: true,
  },
  {
    name: "equals",
    symbol: "=",
    style: ["button"],
    op: true,
  },
];

export const buttons = [...funcButtons, ...operators];

export const numbers = [
  {
    name: "one",
    symbol: "1",
    style: ["button"],
    op: false,
  },
  {
    name: "two",
    symbol: "2",
    style: ["button"],
    op: false,
  },
  {
    name: "three",
    symbol: "3",
    style: ["button"],
    op: false,
  },
  {
    name: "four",
    symbol: "4",
    style: ["button"],
    op: false,
  },
  {
    name: "five",
    symbol: "5",
    style: ["button"],
    op: false,
  },
  {
    name: "six",
    symbol: "6",
    style: ["button"],
    op: false,
  },
  {
    name: "seven",
    symbol: "7",
    style: ["button"],
    op: false,
  },
  {
    name: "eight",
    symbol: "8",
    style: ["button"],
    op: false,
  },
  {
    name: "nine",
    symbol: "9",
    style: ["button"],
    op: false,
  },
  {
    name: "pos-neg",
    symbol: "-/+",
    style: ["button"],
    op: false,
  },
  {
    name: "zero",
    symbol: "0",
    style: ["button"],
    op: false,
  },
  {
    name: "decimal",
    symbol: ".",
    style: ["button"],
    op: false,
  },
];

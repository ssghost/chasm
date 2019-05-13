let apps = [
  { name: "an empty program", input: "", output: [] },
  { name: "a print statement", input: "print 8", output: [8] },
  {
    name: "multiple statements",
    input: "print 8 print 24",
    output: [8, 24]
  },
  {
    name: "binary expressions",
    input: "print(2+ 4)",
    output: [6]
  },
  {
    name: "nested binary expressions",
    input: "print ((6 - 4)+10)",
    output: [12]
  },
  {
    name: "variable declaration",
    input: "var f = 22 print f",
    output: [22]
  },
  {
    name: "variable declaration",
    input: "var foo = 21 print foo",
    output: [21]
  },
  {
    name: "floating point variable declaration",
    input: "var f = 22.5 print f",
    output: [22.5]
  },
  {
    name: "variable assignment",
    input: "var f = 22 f = (f+1) print f",
    output: [23]
  },
  {
    name: "floating point variable assignment",
    input: "var f = 22.5 f = (f+1.5) print f",
    output: [24]
  },
  {
    name: "handles scientific notation and various other numeric formats",
    input: "print 23e02 print -2 print .5",
    output: [2300, -2, 0.5]
  },
  {
    name: "while statements",
    input: "var f = 0 while (f < 5) f = (f + 1) print f endwhile",
    output: [1, 2, 3, 4, 5]
  },
  {
    name: "setpixel statements",
    input: "setpixel (1, 2, 3)",
    output: [] as any[],
    pixels: [[201, 3]]
  },
  {
    name: "if statement",
    input: `
var f = 5
if (f < 10)
  print 2
endif
if (f > 10)
  print 3
endif
    `,
    output: [2]
  },
  {
    name: "else statement operator",
    input: `
if (5 < 3)
  print 2
else
  print 3
endif
    `,
    output: [3]
  }
];

// https://github.com/facebook/jest/issues/7280
test.skip("skip", () => {});

apps = apps.map(f => ({ ...f, input: `proc main() ${f.input} endproc` }));

export default apps;

const s = String.fromCharCode(97, 98, 99);
console.log(s); //

const ret = []
for (let i = 0, len = 20; i < len; i++) {
  const point = Math.random() * 100 + 300;
  const c = String.fromCharCode(point);
  ret.push(c)
}

console.log(ret.join('')); // ĻƉŲŠţłŻžŲŰĵŮŖŝŲŅşűĲŶ

console.log(String.fromCodePoint(97, 9733, 134071)); // a★𠮷

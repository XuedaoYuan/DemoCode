/* const str = 'hello';
for (let i = 0, len = str.length; i < len; i++) {
  console.log(str.charAt(i), str[i]);
} */
/* 
h h
e e
l l
l l
o o
*/

const str = '123abcABC你好';
for (let i = 0, len = str.length; i < len; i++) {
  console.log(`${str[i]} = ${str.codePointAt(i)}`);
}
/* 
1 = 49
2 = 50
3 = 51
a = 97
b = 98
c = 99
A = 65
B = 66
C = 67
你 = 20320
好 = 22909
*/

const s = '\uD800\uDC00';
console.log(s.codePointAt(0), s.charCodeAt(0), s.charCodeAt(1));


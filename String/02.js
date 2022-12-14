function unicode(str) {
  var value = '';
  for (var i = 0; i < str.length; i++) {
    value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
  }
  return value;
}
function left_zero_4(str) {
  if (str != null && str != '' && str != 'undefined') {
    if (str.length == 2) {
      return '00' + str;
    }
  }
  return str;
}

console.log(unicode('𠮷'));
'𠮷'.codePointAt(0); // 134071
'𠮷'.charCodeAt(0); // 55362
'𠮷'.charCodeAt(1); // 57271

console.log('a'.charCodeAt(0));
console.log('a'.codePointAt(0));



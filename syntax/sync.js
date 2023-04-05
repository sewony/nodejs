var fs = require('fs')
/*
console.log('A')
var result = fs.readFileSync('./syntax/sample.txt', 'utf8')
console.log(result)
console.log('C')
*/

console.log('A')
fs.readFile('./syntax/sample.txt', 'utf8', function(err, result){ //작업이 끝난 후에 세번째 인자 함수를 실행시켜~
    console.log(result)
});
console.log('C')
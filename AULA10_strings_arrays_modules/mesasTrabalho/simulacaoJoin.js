let ola = ['o', 'l', 'a'];
let tchau = ['t', 'c', 'h', 'a', 'u'];

function join (arr, separator) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result += separator;
    }
    result += arr[i];
  }
  return result
};

console.log(join(ola, ''));
console.log(join(tchau, ''));
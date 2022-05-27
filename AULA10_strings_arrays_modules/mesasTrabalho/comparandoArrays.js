
let array1 = [1,2,3];
let array2 = [1,3];

const array1String = JSON.stringify(array1);
console.log(array1String)

const array2String = JSON.stringify(array2);
console.log(array2String)

array1String === array2String ? console.log('true') : console.log('false')
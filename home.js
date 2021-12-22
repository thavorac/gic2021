// const canvas = document.querySelector("#canvas");
// if (!canvas.getContext) {
//   alert('your browser doesn\'t support 2d drawing');
// } 
// let ctx = canvas.getContext('2d');

// ctx.fillStyle = '#F9DC5C';
// ctx.fillRect(100, 100, 150, 100);

const stringVariable = `hello 
                        how are you?
                        sdfasdf
                        asdfasf
                        asdf
                        fasdf`
console.log('string length', stringVariable.length)
console.log('character at index 1', stringVariable[1])
console.log('character at index 1', stringVariable.charAt(1))

console.log('normal', stringVariable);
console.log('lowercase', stringVariable.toLocaleLowerCase());
console.log('uppercase', stringVariable.toUpperCase());
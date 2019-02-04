let globalobj
globalobj = 'fooo'

console.log(globalobj)
var obj = {
  noise: ['yoou.mp3'],
  playObject: 'World 73',
  more: 'something else',
  somemore:`${globalobj} and this`
}
console.log(globalobj + obj.somemore)

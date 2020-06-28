const bcrypt = require ( ' bcrypt ' ) ;  

let pass = 'maximo'

let resultado = bcrypt. hashSyanc(pass, 10)

console.log(pass);
console.log(resultado)
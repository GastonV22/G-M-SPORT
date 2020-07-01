const bcrypt = require ( 'bcrypt' ) ;  

let pass = 'maximo';

let resultado = bcrypt.hashSync(pass, 10);

console.log(pass);
console.log(resultado);
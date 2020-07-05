const fs = require('fs');

function rememberMiddleware(req, res, next) {
    next()
    if(req.cookies.remember !=undefined && req.seccion.usuarios== undefined){

        
      let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
      let usuarios;
      if(archivoUser== "") {
           usuarios=[]; 
          
      }else{
          usuarios = JSON.parse(archivoUser)
    
                  }
                  for (let i = 0; i < usuarios.length; i++) {
                      if( req.cookies.remember==usuarios[i].email ){
                         let usuariosAlogearse = usuarios[i];
                         break;

                        }
                    }
                    req.session.usuarios= usuariosAlogearse;
                }

}

module.exports= rememberMiddleware;
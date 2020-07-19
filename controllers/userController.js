const fs = require("fs")
const bcrypt = require ( 'bcrypt' ) ;  
const {check, validationResult, body}= require('express-validator');
const multer = require("multer");

let userController={
   
    register: function(req,res,next){
        res.render('register')    
    },

  

    login: function(req,res,next){
        res.render('login')
    },

  processLogin:function (req,res) {
    console.log(validationResult(req));

    let errors= validationResult(req);

if (errors.isEmpty()){



      let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
  let usuarios;
  if(archivoUser== "") {
       usuarios=[]; 
      
  }else{
      usuarios = JSON.parse(archivoUser)

              }
              for (let i = 0; i < usuarios.length; i++) {
                  if( req.body.email==usuarios[i].email &&  bcrypt.compareSync(req.body.password, usuarios[i].password)){
                    
                   
                    let usuariosAlogearse = usuarios[i];
                

                    res.send("login correcto")
                  }
                  
              }
              if(usuariosAlogearse== undefined)
              return res.render('login',{errors:[
                  {msg: 'credenciales inavalidas'}

              ]}) 
              req.session.usuarios= usuariosAlogearse;
              if(req.body.remember != undefined){
                  res.cookie ('remember',usuariosAlogearse.email,{maxAge:60000})
              }


              res.render('/')
            }
     
  else{
     return res.render('login',{errors: errors.errors}) 
  }
  },
    
  userList:function(req,res){},

createUser: function (req,res,next){
        
        let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  bcrypt.hashSync(req.body.password, 10),
            avatar: req.files[0].filename
        }
  let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
    let usuarios;
    if(archivoUser== "") {
         usuarios=[]; 
        
    }else{
        usuarios = JSON.parse(archivoUser)

                }

               usuarios.push(usuario)
         
    //guardarla
   
let userJson = JSON.stringify(usuarios);

fs.writeFileSync('data/user.JSON',userJson)
    
res.redirect('/')
},


'search':function(req,res,next){

    let loQueBuscoElUsuario= req.query.query;
    let users=[
        {id:1,},
        {id:2,},
        {id:3,},
        {id:4,},
        {id:5,},
    ]
let userResults =[];
for (let i =0;i <user.length;i ++){
  if (user[i].name.includes(loQueBuscoElUsuario)){
      userResults.push( users[i]); 
  }

}
 res.render('userResults',{userResults:userResults})  
},



//guardarla
    
       
}


module.exports= userController
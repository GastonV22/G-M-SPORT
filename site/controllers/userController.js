const fs = require("fs")
const bcrypt = require ( 'bcrypt' ) ;  
const {check, validationResult, body}= require('express-validator');
const multer = require("multer");
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
let userController={
   
    register: function(req,res){
        res.render('register',{usuario: req.session.user} )    
    },

  

    login: function(req,res){
        res.render('login',{usuario: req.session.user} )
    },

processLogin:function (req,res) {
            console.log(validationResult(req));

            let errors= validationResult(req);

        if (errors.isEmpty()){

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then( user => {
               
                if(bcrypt.compareSync(req.body.password, user.password)){
                    // let userId = user.id;
                    // if(req.body.recordame) {
                      
                    //     res.cookie('user', userId, { expires: new Date(Date.now() + 10000000)});                     
                    // }       
                    // req.session.logueado = true;
                    // req.session.user = user.id;
                    // res.locals.logueado = true;
                    // res.locals.user = user.id;
                    
                    
                }
                res.redirect('/',{usuario: req.session.user} )
                // res.send('paso por aqui')
                // }).catch((error) => {
                //     console.error(error);
                //     return res.redirect('users/login');
                 })

            } else{
                return res.render('login',{errors: errors.errors},{usuario: req.session.user} ) 
                    }
            
           
        },


//       let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
//   let usuarios;
  
//   if(archivoUser== "") {
//        usuarios=[]; 
      
//   }else{
//       usuarios = JSON.parse(archivoUser)

//               }  let usuariosAlogearse;
//               for (let i = 0; i < usuarios.length; i++) {
//                   if( req.body.email==usuarios[i].email &&  bcrypt.compareSync(req.body.password, usuarios[i].password)){
                    
                   
//                      usuariosAlogearse  = usuarios[i];
                

//                     res.send("login correcto")
//                   }
                  
//               }
//               if(usuariosAlogearse== undefined)
//               return res.render('login',{errors:[
//                   {msg: 'credenciales inavalidas'}

//               ]}) 
//               req.session.usuarios= usuariosAlogearse;
//               if(req.body.remember != undefined){
//                   res.cookie ('remember',usuariosAlogearse.email,{maxAge:60000})
//               }


userList:function(req,res){},

createUser: function (req,res,next){
    
        let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  bcrypt.hashSync(req.body.password, 8),
          
         
        }
        let errors = validationResult(req);
            
            if(errors.isEmpty()) {                  
                usuario = {
                 name : req.body.name,
                 email : req.body.email,
                 password : bcrypt.hashSync(req.body.password, 8),
                 
             }

        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            avatar: req.body.avatar,
            categorys_id: 1,
            marcas_id: 1
        });
        req.session.logeado=true
        res.redirect('/',{usuario: req.session.user} )
    }else {
        console.log(errors.mapped())
        return res.render ("register", {errors: errors.mapped() , body : req.body}  )
    }

    },
//   let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
//     let usuarios;
//     if(archivoUser== "") {
//          usuarios=[]; 
        
//     }else{
//         usuarios = JSON.parse(archivoUser)

//                 }

//                usuarios.push(usuario)
         
//     //guardarla
   
// let userJson = JSON.stringify(usuarios);

// fs.writeFileSync('data/user.JSON',userJson)
    
// res.redirect('/')
// },


// 'search':function(req,res,next){

//     let loQueBuscoElUsuario= req.query.query;
//     let users=[
//         {id:1,},
//         {id:2,},
//         {id:3,},
//         {id:4,},
//         {id:5,},
//     ]
// let userResults =[];
// for (let i =0;i <user.length;i ++){
//   if (user[i].name.includes(loQueBuscoElUsuario)){
//       userResults.push( users[i]); 
//   }

// }




//guardarla
    
       
}


module.exports= userController
const fs = require("fs")
const bcrypt = require ( 'bcrypt' ) ;  
const {check, validationResult, body}= require('express-validator');
const multer = require("multer");
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
let userController={
   
    register: function(req,res){
        res.render('register', {errors : {} ,body : {} } )    
    },

  

    login: function(req,res){
        res.render('login',)
    },

processLogin:function (req,res) {
    let users = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,}
    errors = validationResult(req); 
    console.log(errors)
       if(errors.isEmpty() ){

           db.User.findOne({
               where: {
                   email: req.body.email
               }
           }).then( user => {
               console.log(user.password);
               console.log(req.body.password)
               if(bcrypt.compareSync(req.body.password, user.password)){
                   let userId = user.id;
                   if(req.body.recordame) {
                       //por 15 minutos
                       res.cookie('user', userId, { expires: new Date(Date.now() + 90000000)});                     
                   }       
                   req.session.logueado = true;
                   req.session.user = user.id;
                   res.locals.logueado = true;
                   res.locals.user = user.id;

                   if (user.admin) {
                       req.session.admin = true;
                       res.locals.admin = true;
                   }

                   return res.redirect('/');
               }
               res.send('paso por aqui')
           }).catch((error) => {
               console.error(error);
               return res.redirect('login');
           })

       } else {
        
           return res.render('perfil', {users:users});

       }

   },

userList:function (req,res ){
                db.User.findAll()
                    .then(function(users){
                        res.render("userlist",{users:users})
                    })
                },
createUser: function (req,res,next){
    let errors = validationResult(req);
    
    if(errors.isEmpty()) { 
         let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  bcryptjs.hashSync(req.body.password, 8),
          
         
        }
        // let errors = validationResult(req);
            
        //     if(errors.isEmpty()) {                  
        //         usuario = {
        //          name : req.body.name,
        //          email : req.body.email,
        //          password : bcrypt.hashSync(req.body.password, 8),
                 
        //      }

        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password, 8),
            avatar: req.body.avatar,
            categorys_id: 1,
            marcas_id: 1
        });
     
    }else {
        console.log(errors.mapped())
        return res.render ("register", {errors: errors.mapped() , body : req.body}  )
    }
  
    res.redirect('/') 
},

    // },
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
perfil : async (req, res) => {

    db.User.findByPk(req.params.id,{
        //  include:[{association:'Cartegory'},{association:'Marca'}]
    })
        .then(function(users){
           
            res.render('perfil',{users:users})
        })
    },


detallePerfil:function (req,res ){
    db.User.findByPk(req.params.id,{
        //  include:[{association:'Cartegory'},{association:'Marca'}]
    })
        .then(function(users){
           
            res.render('detallePerfil',{users:users})
        })
    },

    
    editPerfil:function(req,res){
        let users = req.params.id;
        db.User.findByPk(req.params.id)
        
        .then(function(users){
          
           res.render('editPerfil',{users:users})
       })
 
 
      
       // console.log(errors);

        // if (!errors.isEmpty()) {
           
        //     db.User.findByPk(req.params.id)
        //     .then(function(producto){
        //     //   db.Marca.findAll().
        //     //             then(function(marcas){
        //     //                 res.render("editarProducto", {producto, marcas, errors: errors.errors});
        //     //             })
                  
        //     })
        //         } else {

      
    },


    
   actualizarPerfil:function(req,res){
     
    db.User.update({
        firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            avatar: req.body.avatar,
            categorys_id: 1,
            marcas_id: 1
    }, {
        where:{
            id: req.params.id
        }

    });
    res.redirect("/user/" + req.params.id)
   },

    deletePerfil:function(req,res){
        db.User.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect('/')
    },
       
}


module.exports= userController
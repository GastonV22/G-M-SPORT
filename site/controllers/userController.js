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

    logout: function(req,res){
        console.log(222)

        req.session.logueado=false

        res.redirect('/')
    },

processLogin:function (req,res) {
     
    req.session.logueado= false;
   
    let users = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,}
    errors = validationResult(req); 
    console.log(errors)
       if(errors.isEmpty() ){
        console.log("222")
           db.User.findOne({
               where: {
                   email: req.body.email
               }
           }).then( user => {
               if(bcryptjs.compare(req.body.password, user.password)){
                   let userId = user.id;
                   if(req.body.recordame) {
                       //por 15 minutos
                       res.cookie('user', userId, { expires: new Date(Date.now() + 90000000)});                     
                   }     
                   req.session.logueado= true;
                   req.session.user = user;

                   if (user.admin) {
                       req.session.admin = true;
                   }

                   return res.redirect('/user/' + user.id);
               }

               
               res.send('paso por aqui')
           }).catch((error) => {
               console.error(error);
               return res.redirect('login');
           })

       } else {
            return res.render('login', {errors : errors.mapped(), body : req.body});
           //return res.render('perfil', {users:users});

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

    let userid;
    
    if(errors.isEmpty()) { 
         let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  bcryptjs.hashSync(req.body.password,4),
          
         
        }
    

            let avatar = '';
            if (req.file)   {
            
                avatar = '/imgUser/' + req.file.filename;
            } 
              

       db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password, 4),
            avatar: avatar,
            categorys_id: 1,
            marcas_id: 1
        }).then(function(user){
          
            req.session.logueado= true;
            req.session.user = user;
            userid = user.id;
            console.log(userid)
            
            return res.redirect('/user/' + userid);

        });

        


    }else {
        
        return res.render ("register", {errors: errors.mapped() , body : req.body}  )
    }
 
            
    
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
    
    let avatar = '';
    if (req.file) {
    
        avatar = '/imgUser/' + req.file.filename;
    }

     
    db.User.update({
        firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password, 4),
            avatar: avatar,
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
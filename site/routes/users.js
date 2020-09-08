const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");

const {check, validationResult, body}= require('express-validator');
const fs = require ('fs');
const path = require("path"); 
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const guestMdw = require ("../middlewares/guest");
const authMdw = require ("../middlewares/auth");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgUser')
    }, 
    
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage,})  


//GET users listing. 

router.get('/register',guestMdw ,userController.register);

router.post('/register', upload.any(),userController.createUser);

router.get('/login',guestMdw ,userController.login);

router.post('/login',[

  check('password', 'La contraseña debe tener al menos 4 caracteres').isLength({min:6}).bail(),
  check('email', 'Email invalido').isEmail().custom((value, { req }) => {
      return db.User.findOne({where :{email : value}}).then(user => {
          if (user == null) {
              return Promise.reject('Credenciales invalidas');
          } else if (user && !bcryptjs.compareSync(req.body.password , user.password)) {
              return Promise.reject('Credenciales invalidas');
          }
      })
  }),
   

], userController.processLogin);


//   check('email'). isEmail().withMessage('El email debe ser valido '),
//   check('password').isLength({mim:7}).withMessage('Este campo debe contener un minimo de 7 caracteres '),
// body ('email').custom(function(value){
//   let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
//   let usuarios;
//   if(archivoUser== "") {
//        usuarios=[]; 
      
//   }else{
//       usuarios = JSON.parse(archivoUser)
//     }
//               for (let i= 0;i<usuarios.length; i ++){
//                 if(usuarios[i].email== value){
//                   return true;
//                  }
//               }
//               return false;

// }). withMessage('usuario no esta logueado ')
// ],userController. processLogin);

 
router.post('/login',userController.userList);



module.exports = router;


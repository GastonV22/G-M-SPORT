const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");

const {check, validationResult, body}= require('express-validator');
const fs = require ('fs');
const path = require("path"); 
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcrypt');
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

router.get('/register',userController.register);

router.post('/register',upload.single('avatar'),[
  check("firstname").isLength({ min: 1 }).withMessage("El Nombre no puede estar vacio"),
  check("email").isLength({ min: 1 }).withMessage("El Email no puede estar vacio"),
  check("password").isLength({ min: 1 }).withMessage("El Password no puede estar vacio"),
  
   //validacion de email por BD
   ],userController.createUser);

router.get('/userlist',userController.userList);

router.get('/login',userController.login);

router.post('/login',[
 
  check('password').isLength({min:4})
  .withMessage('Invalid Password, min 4 characters').bail(),
check('email').isEmail()
  .withMessage('Invalid Email')
  .custom((value, { req }) => {
      return db.User.findOne({where :{email : value}}).then(user => {

         if (user == null) {
              return Promise.reject(' error de usuario');
          } else if (user && !bcryptjs.compare(req.body.password , user.password)) {
              return Promise.reject('error contraseña');
          }
      })

    })





 ], userController.processLogin);

 router.get('/logout', userController.logout);

router.get("/perfil", userController.perfil );

router.get('perfil/:id',userController.detallePerfil);
router.get('/:id',userController.detallePerfil);

router.get('/editPerfil/:id',userController.editPerfil);

router.put('/editPerfil/:id',upload.single('avatar'), [
  check('name').isLength({min:5}).withMessage('Debes escribir un nombre'),
  check('email').isEmail().withMessage('El email debe ser un email valido')],userController.actualizarPerfil)

router.post('/deletePerfil/:id',userController.deletePerfil);




module.exports = router;


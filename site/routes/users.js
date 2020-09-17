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

router.get('/register',userController.register);

router.post('/register', upload.any(),[
  check("firstname").isLength({ min: 1 }).withMessage("El Nombre no puede estar vacio"),
  check("email").isLength({ min: 1 }).withMessage("El Email no puede estar vacio"),
  check("password").isLength({ min: 1 }).withMessage("El Password no puede estar vacio"),
  
   //validacion de email por BD
   ],userController.createUser);

router.get('/userlist',userController.userList);

router.get('/login',userController.login);

router.post('/login',[
 
  check("password").isLength({min:4}).withMessage("El password debe tener 6 caracteres como mínimo"),
  check("usuario").custom((value, {req}) => {
    return db.Users.findOne({where:{name : value}}).then(user => {
      
      if (user== null) {
        return Promise.reject("Usuario invalido");
      } else if (user && !bcrypt.compareSync(req.body.password , user.password)) {
          return Promise.reject("Password incorrecto");
      }
    })
  })
], userController.processLogin);



router.get("/perfil", userController.perfil );

router.get('perfil/:id',userController.detallePerfil);
router.get('/:id',userController.detallePerfil);

router.get('/editPerfil/:id',userController.editPerfil);

router.put('/editPerfil/:id',upload.any(), [
  check('name').isLength({min:5}).withMessage('Debes escribir un nombre'),
  check('email').isEmail().withMessage('El email debe ser un email valido')],userController.actualizarPerfil)

router.post('/deleteUser/:id',userController.deletePerfil);




module.exports = router;


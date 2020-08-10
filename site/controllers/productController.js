const fs = require("fs")
const bcrypt = require ( 'bcrypt' ) ;  
const {check, validationResult, body}= require('express-validator');
const multer = require("multer");
let db= require("../database/models")
let productcontroller={

    edit: function(req,res,next){

        let idProducts= req.params.idProducts;
        let productstoEdit=[
            {id:1,},
            {id:2,}, 
            {id:3,},
            {id:4,},
            {id:5,},
        ] 
       
        let productsEdit = producto[idProducts];

    res.render('/edit', {productsToEdit:productsToEdit});
  
  
    },
    
   

  
    create: function(req,res, next){
        
        res.render('create');
    },
   
    list:function (req,res ){
        db.Product.findAll()
            .then(function(productos){
                res.render("list",{productos:productos})
            })
        },

    //let prod=fs.readFileSync('data/prod.JSON', {encoding:'utf-8'});
   
   // res.render('list',{'prod':prod});
    //;next();
  
    //res.render('list')},
    
    delete:function(req,res){
        res.render('delete')
    },
    
    search: function (req,res) {
        res.render('search')
    },
 createProd: function (req,res){
        
    let products = {
        producto: req.body.producto,
        marca: req.body.marca,
        deporte: req.body.deporte,
        genero: req.body.genero,
        precio: req.body.precio,
      
       
          
    }

    db.Product.create({
        name: req.body.name,
        marca: req.body.marca,
        precio:req.body.precio,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        categorys_id: 1,
        marcas_id: 1
    });

//     let archivoProd= fs.readFileSync('data/prod.JSON', {encoding:'utf-8'});
//     let productos;
//     if(archivoProd=== "") {
//         productos=[]; 
        
//     }else{
//        productos = JSON.parse(archivoProd)

//                 }

//                productos.push(products)
         
//     //guardarla
   
// let userProd= JSON.stringify(productos);

// fs.writeFileSync('data/prod.JSON',userProd)
    

        
       res.redirect('/products/list') 
     ;
}



//guardarla
}
module.exports= productcontroller;
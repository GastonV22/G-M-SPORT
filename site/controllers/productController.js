const fs = require("fs")
const bcrypt = require ( 'bcrypt' ) ;  
const {check, validationResult, body}= require('express-validator');
const multer = require("multer");
let db= require("../database/models")


let productcontroller={


  
    create: function(req,res, next){
        
        res.render('create');
    },
   
   

     
    //let prod=fs.readFileSync('data/prod.JSON', {encoding:'utf-8'});
   
   // res.render('list',{'prod':prod});
    //;next();
  
    //res.render('list')},
    
   
    
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
},
list:function (req,res ){
    db.Product.findAll()
        .then(function(productos){
            res.render("list",{productos:productos})
        })
    },

detalle:function (req,res ){
    db.Product.findByPk(req.params.id,{
        //  include:[{association:'Cartegory'},{association:'Marca'}]
    })
        .then(function(productos){
           
            res.render('detalleProducto',{productos:productos})
        })
    },

    
    edit: function(req,res){

        let pedidoProducts=db.Product.findByPK( req.params.id)
        
        

        .then(function(products){
           
            res.render('edit/id',{products:products})
        })
  
  
    },
    
   

    delete:function(req,res){
        db.Product.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect('list')
    },
//guardarla
}
module.exports= productcontroller;
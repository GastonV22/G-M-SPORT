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
  
    next();
    },
    
   

  
    add: function(req,res, next){
        
        res.render('create')
        ;next();
    },
   
    list:function (req,res,next){

    let productoAdd=[
        {id:1,},
        {id:2,}, 
        {id:3,},
        {id:4,},
        {id:5,},
    ]
    res.render('add',{'productoAdd':productoAdd});
    ;next();
    },
    
    delete:function(req,res, next){
        res.render('delete')
    },
    
    search: function (req,res,next) {
        res.render('search')
    },
 create: function (req,res, next){
        
    let products = {
        producto: req.body.producto,
        marca: req.body.marca,
        deporte: req.body.deporte,
        genero: req.body.genero,
        precio: req.body.precio,
        image: req.body.image   
          }

      res.redirect('/products/list') 
     ;next(); 
}



//guardarla
}
module.exports= productcontroller;
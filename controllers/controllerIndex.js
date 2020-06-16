let controllerIndex={
    
    carrito: function(req,res, next){
        res.render('carrito')
        ;next();
    },
    id: function(req,res, next ){
        res.render(':id')  
        ;next();
    },
    error: function(req,res, next ){
        res.render('error')
        ;next();
    },
    edit: function(req,res,next){
        let idProducts= req.params.idProducts;
        let productoadd=[
            {id:1,},
            {id:2,}, 
            {id:3,},
            {id:4,},
            {id:5,},
        ] 
        let productsToEdit = producto[idProducts];

    res.render('productsEdit', {productsToEdit:productsToEdit});
  
    next();
    },
    faq: function(req,res, next){
        res.render('faq') 
        ;next();
    },
    home: function(req,res, next){
        res.render('index')
        ;next();

    },
    productoadd: function(req,res, next){
        
        res.render('productoadd')
        ;next();
    },
   
    listProducts:function (req,res,next){

    let productoadd=[
        {id:1,},
        {id:2,}, 
        {id:3,},
        {id:4,},
        {id:5,},
    ]
    res.render('productoadd',{'productoadd':productoadd});
    ;next();
    },
    
    delete:function(req,res, next){},

 createProductoadd : function (req,res, next){
        
    let producto = {
        producto: req.body.producto,
        marca: req.body.marca,
        deporte: req.body.deporte,
        genero: req.body.genero,
        precio: req.body.precio,
        image: req.body.image   
          }

      res.redirect('/listProducts') 
     ;next(); 
}



//guardarla
    
}



module.exports= controllerIndex;

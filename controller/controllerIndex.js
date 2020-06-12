let controllerIndex={
    
    carrito: function(req,res, next){
        res.render('carrito')
    },
    id: function(req,res, next){
        res.render(':id')
    },
    error: function(req,res, next){
        res.render('error')
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

    res.render('productsEdit', {productsToEdit:productsToEdit})
    },
    faq: function(req,res, next){
        res.render('faq')
    },
    index: function(req,res, next){
        res.render('index')

    },
    productoadd: function(req,res, next){
        
        res.render('productoad')
    },
   
    listProducts:function (req,re,next){

    let productoadd=[
        {id:1,},
        {id:2,}, 
        {id:3,},
        {id:4,},
        {id:5,},
    ]
    res.render('productoadd',{'productoadd':productoadd});
},
    


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
},



//guardarla
    
       
}


module.exports=  controllerIndex

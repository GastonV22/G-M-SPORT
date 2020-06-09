let userController={
    'register': function(req,res, next){
        res.render('regiter')    
    },

    'carrito': function(req,res, next){
        res.render('carrito')
    },
    ':id': function(req,res, next){
        res.render(':id')
    },
    'error': function(req,res, next){
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
    'faq': function(req,res, next){
        res.render('faq')
    },
    'index': function(req,res, next){
        res.render('index')

    },
    'productoadd': function(req,res, next){
        
        res.render('productoad')
    },
    'login': function(req,res, next){
        res.render('login')
    },

    'listProducts':function (req,re,next){

    let productoadd=[
        {id:1,},
        {id:2,}, 
        {id:3,},
        {id:4,},
        {id:5,},
    ]
    res.render('productoadd',{'productoadd':productoadd});
},
    
create: function (req,res, next){
        
        let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            image: req.body.image
    }

//guardarla

    res.redirect('user/list')
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
search:function(req,res,next){

    let loQueBuscoElUsuario= req.query.query;
    let users=[
        {id:1,},
        {id:2,},
        {id:3,},
        {id:4,},
        {id:5,},
    ]
let userResults =[];
for (let i =0;i <user.length;i ++){
  if (user[i].name.includes(loQueBuscoElUsuario)){
      userResults.push( users[i]); 
  }

}
 res.render('userResults',{userResults:userResults})  
},


//guardarla
    
       
}


module.exports= userController
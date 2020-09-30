
    formulario = document.querySelector("form.formulario")
    

    formulario.onsubmit = function(event){
      
        let marca = document.getElementById("marca").value;
        let name  = document.getElementById("name").value;
        let stock = document.getElementById("email").value;
        let precio = document.getElementById("precio").value;
       
     

        let invalidName = document.getElementById("invalidName");
        let invalidMarca= document.getElementById("invalidLastMarca");
        let invalidStock= document.getElementById("invalidStock");
        let invalidPrecio= document.getElementById("invalidPrecio");
        

        let errorName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      
        if(marca == "") {
  
            invalidMarca.innerHTML = "la Marca esta vacio js"
            event.preventDefault();
        };

        if(name == "") {
  
            invalidName.innerHTML = "El Nombre esta vacio js"
            event.preventDefault();
        };
        
        if( stock == "" ){
          
            invalidStock.innerHTML = "El Stock esta vacio js"
            event.preventDefault();
        }



        if(Precio == "" ){
            
            invalidPassword.innerHTML = "El Precio debe tener 4 caracteres como minimo"
            event.preventDefault();
        }
        


       

        

        
    }





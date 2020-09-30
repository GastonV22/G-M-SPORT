window.onload = () => {

    formulario = document.querySelector("form.formulario")
    

    formulario.onsubmit = function(event){
      
        let firstname = document.getElementById("firstname").value;
        let lastname  = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
       
     

        let invalidName = document.getElementById("invalidName");
        let invalidLastName = document.getElementById("invalidLastName");
        let invalidEmail = document.getElementById("invalidEmail");
        let invalidPassword = document.getElementById("invalidPassword");
        

        let errorName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      
        if(firstname == "") {
  
            invalidName.innerHTML = "El Nombre esta vacio js"
            event.preventDefault();
        };

        if(lastname == "") {
  
            invalidLastName.innerHTML = "El Apellido esta vacio js"
            event.preventDefault();
        };
        
        if( email == "" ){
          
            invalidEmail.innerHTML = "El Email esta vacio js"
            event.preventDefault();
        }



        if(password == "" || password.length < 4){
            
            invalidPassword.innerHTML = "El Password debe tener 4 caracteres como minimo"
            event.preventDefault();
        }
        


       

        

        
    }




}
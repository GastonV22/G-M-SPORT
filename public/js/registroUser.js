window.onload = () => {

    formulario = document.getElementById("formulario")
    

    formulario.onsubmit = function(event){
        
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
       
     

        let invalidName = document.getElementById("invalidName");
        let invalidEmail = document.getElementById("invalidEmail");
        let invalidPassword = document.getElementById("invalidPassword");
        

        let errorName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      
        if(usuario.value == "") {
  
            invalidName.innerHTML = "El Nombre esta vacio"
            event.preventDefault();
        };
        
        if(!errorEmail.test(email.value)){
          
            invalidEmail.innerHTML = "El Email no es valido"
            event.preventDefault();
        }

        if(password.value.length < 6){
            
            invalidPassword.innerHTML = "El Password debe tener 8 caracteres como minimo"
            event.preventDefault();
        }
        


       

        

        
    }




}
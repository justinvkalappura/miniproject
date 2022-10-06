         //Registration button click
        function registerValid()
        {   var isValid=true;
            var nameCityPattern =  /^[a-zA-Z]+$/;
            var pwdPattern=/^(?=.*\d)(?=.*[A-Z]).{6,}/;
            var contactPattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
            var emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;            
            var validFirstname = document.getElementById("sj1").value;
            var validLastname = document.getElementById("sj2").value;
            var validEmail = document.getElementById("sj3").value;
            var validPassword1 = document.getElementById("sj4").value;
            var validPassword2 = document.getElementById("sj5").value;
            var validCity = document.getElementById("sj6").value;
            var validContact = document.getElementById("sj7").value; 
            var filePath = document.getElementById("sj8").value;

           
            //firstName validation on buttonClick
            if(validFirstname==null || validFirstname==""){
                document.getElementById("fnameValidate").innerHTML="First Name Required";
                isValid=false;
            }
            else if(!validFirstname.match(nameCityPattern)){
                document.getElementById("fnameValidate").innerHTML="Only characters are acceptable";
                isValid=false;
            }

            
            //lastName validation on buttonClick
            if(validLastname==null || validLastname==""){
                document.getElementById("lnameValidate").innerHTML="Last Name Required";
                isValid=false;
            }
            else if(!validLastname.match(nameCityPattern)){
                document.getElementById("lnameValidate").innerHTML="Only characters are acceptable";
                isValid=false;
            }

            
            //email validation on buttonClick
            if(validEmail==null || validEmail==""){
                document.getElementById("emailValidate").innerHTML="Email Required";
                isValid=false;
            }
            else if(!validEmail.match(emailPattern)){
                document.getElementById("emailValidate").innerHTML="Invalid email";
                isValid=false;
            }

            
            //password validation on buttonClick
            if(validPassword1==null || validPassword1==""){
                document.getElementById("passwordValidate").innerHTML="Password Required";
                isValid=false;
            }
            else if(!validPassword1.match(pwdPattern)){
                alert("Password should have atleast 8 characters with one alphaneumeric, one uppercase and one lowercase");
                isValid=false;
            }

            
            //confirm password on buttonClick
            if(validPassword2==null || validPassword2==""){
                document.getElementById("cpasswordValidate").innerHTML="Password Required";
                isValid=false;
            }
            else if(validPassword1!=validPassword2){
                document.getElementById("cpasswordValidate").innerHTML="Enter same password";
                isValid=false;
            }
            else if(!validPassword2.match(pwdPattern)){
                alert("Password should have atleast 8 characters with one alphaneumeric, one uppercase and one lowercase");
                isValid=false;
            }

            
            //city validation on buttonClick
            if(validCity==null || validCity==""){
                document.getElementById("cityValidate").innerHTML="City Required";
                isValid=false;
            }
            else if(!validCity.match(nameCityPattern)){
                document.getElementById("cityValidate").innerHTML="Invalid City";
                isValid=false;
            }

            
            //contact validation on buttonClick
            if(validContact==null || validContact==""){
                document.getElementById("contactValidate").innerHTML="Contact Required";
                isValid=false;
            }
            else if(!validContact.match(contactPattern)){
                document.getElementById("contactValidate").innerHTML="Invalid contact number";
                isValid=false;
            }


            //photo on buttonClick
            if(filePath==null || filePath==""){
                document.getElementById("fileValidation").innerHTML="Photo Required";
                isValid=false;
            }
            else if(!filePath.match(allowedExtensions)){
                document.getElementById("cpasswordValidate").innerHTML="Unsupported file format";
                isValid=false;
            }

            return isValid;
        }


        //validate firstname with various conditions
         function fnameValidate(){
         var firstname = document.getElementById("sj1").value;
         var pattern =  /^[a-zA-Z]+$/;
         isValid=true;
         if(firstname.match(pattern)){
            document.getElementById("fnameValidate").innerHTML="";
         }
         else if(!firstname){
            document.getElementById("fnameValidate").innerHTML="First Name Required";
            isValid=false;
         }
         else{
            document.getElementById("fnameValidate").innerHTML="Only characters are acceptable";
            isValid=false;
         }
         return isValid;
        }

      
        //validate lastname with various conditions
        function lnameValidate(){
         var lastname = document.getElementById("sj2").value;
         var pattern =  /^[a-zA-Z]+$/;
         isValid=true;
         if(lastname.match(pattern)){
            document.getElementById("lnameValidate").innerHTML="";
         }
         else if(!lastname){
            document.getElementById("lnameValidate").innerHTML="Last Name Required";
            isValid=false;
         }
         else{
            document.getElementById("lnameValidate").innerHTML="Only characters are acceptable";
            isValid=false;
         }
         return isValid;
        }

      
        //validate email with various conditions
        function emailValidate(){
         var email = document.getElementById("sj3").value;
         var pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
         isValid=true;
         if(email.match(pattern)){
            document.getElementById("emailValidate").innerHTML="";
          }
          else if(!email){
            document.getElementById("emailValidate").innerHTML="Email Required";
            isValid=false;
         }
          else{
            document.getElementById("emailValidate").innerHTML="Invalid email";
            isValid=false;
          }
          return isValid;
        }


         //validate validatepwd with various conditions
        function validatepwd(){
        var password = document.getElementById("sj4").value;
        var pattern=/^(?=.*\d)(?=.*[A-Z]).{6,}/;
        isValid=true;
        if(password.match(pattern)){
           document.getElementById("passwordValidate").innerHTML="";  
        }
        else if(!password){
           document.getElementById("passwordValidate").innerHTML="Password Required";
           isValid=false;
        }
        else{
           isValid=false;
        }
        return isValid;
        
        }
     

        //validate validateconfirmPassword with various conditions
        function validateconfirmPassword(){
         var cpassword = document.getElementById("sj5").value;
         var password = document.getElementById("sj4").value;
         isValid=true;
         if(cpassword!=password){
            document.getElementById("cpasswordValidate").innerHTML="Enter same password";
         }
         else if(!cpassword){
            document.getElementById("cpasswordValidate").innerHTML="Password Required";
            isValid=false;
         }
         else{
             document.getElementById("cpasswordValidate").innerHTML="";
            isValid=false;
         }
         return isValid;

        }

      
        //validate validatecity with various conditions
        function validatecity(){
         var city = document.getElementById("sj6").value;
         var pattern =  /^[a-zA-Z]+$/;
         isValid=true;
         if(city.match(pattern)){
            document.getElementById("cityValidate").innerHTML="";
         }
         else if(!city){
            document.getElementById("cityValidate").innerHTML="City Required";
            isValid=false;
         }
         else{
            document.getElementById("cityValidate").innerHTML="Invalid city";
            isValid=false;
         }
         return isValid;
        }

        
        //validate contactnumber with various conditions
        function cnoValidate(){
            var cno = document.getElementById("sj7").value;
            var pattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
            isValid=true;
            if(cno.match(pattern)){
               document.getElementById("contactValidate").innerHTML="";
            }
            else if(!cno){
               document.getElementById("contactValidate").innerHTML="Number required";
               isValid=false;
            }
            else{
               document.getElementById("contactValidate").innerHTML="Invalid Contact Number";
               isValid=false;
            }
            return isValid;
            
        }


        //validate fileValidation with various conditions
        function fileValidation(){       
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        }
        else
        {   if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').innerHTML ='<img src="' + e.target.result+ '"/>';
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }
        }
      
      
        //validate Login button click
        function loginValid(){
            var loginEmail = document.getElementById("sj1").value;
            var loginEmailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            isValid=true;
            if(loginEmail.match(loginEmailPattern)){
                document.getElementById("validateEmail").innerHTML="";
            }
            else if(!loginEmail){
                document.getElementById("validateEmail").innerHTML="Email Required";
                isValid=false;
            }
            else{
                document.getElementById("validateEmail").innerHTML="Invalid email";
                isValid=false;
            }

            var loginPassword = document.getElementById("loginPassword").value;
            var loginPasswordPattern=/^(?=.*\d)(?=.*[A-Z]).{6,}/;
            isValid=true;
            if(loginPassword.match(loginPasswordPattern)){
                document.getElementById("validatePassword").innerHTML="";
            }
            else if(!loginPassword){
                document.getElementById("validatePassword").innerHTML="Password Required";
                isValid=false;
            }
            else{
                alert("Password should have atleast 8 characters with one alphaneumeric, one uppercase and one lowercase");
                isValid=false;
            }
            return isValid;
        }



      //validate loginEmailValidate with various conditions
        function loginEmailValidate(){
          var loginEmail = document.getElementById("loginEmail").value;
            var loginEmailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            isValid=true;
            if(loginEmail.match(loginEmailPattern)){
                document.getElementById("validateEmail").innerHTML="";
            }
            else if(!loginEmail){
                document.getElementById("validateEmail").innerHTML="Email Required";
               isValid=false;
                     }
            else{
               document.getElementById("validateEmail").innerHTML="Invalid email";
               isValid=false;
           }
            return isValid;
        }
     
      
        //validate loginpasswordValidate with various conditions
        function loginPasswordValidate(){
         var loginPassword = document.getElementById("loginPassword").value;
            var loginPasswordPattern=/^(?=.*\d)(?=.*[A-Z]).{6,}/;
              isValid=true;
            if(loginPassword.match(loginPasswordPattern)){
                document.getElementById("validatePassword").innerHTML="";
            }
            else if(!loginPassword){
                document.getElementById("validatePassword").innerHTML="Password Required";
                isValid=false;
            }
            else{
                isValid=false;
           }
           return isValid;
        }

      
      
      
    
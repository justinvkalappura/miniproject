<?php
 include "connect.php";
 if(isset($_POST["n9"]))
 {   $a=$_POST["n1"];
     $b=$_POST["n2"];
	 $c=$_POST["n3"];
	 $d=$_POST["n4"];
     $e=$_POST["n6"];
     $f=$_POST["n7"];
	 $g=$_FILES["n8"]["name"];
     move_uploaded_file($_FILES["n8"]["tmp_name"],"pics/".$g);
	 $result=mysqli_query($conn,"INSERT INTO `user_table`(`u_fn`, `u_ln`, `u_email`, `u_pwd`, `u_city`, `u_contact`, `u_pic`) VALUES ('$a','$b','$c','$d','$e','$f','$g')" );
     $out=mysqli_query($conn,"INSERT INTO `login_table`(`u_email`, `u_pwd`) VALUES ('$c','$d')" );    
     if($result)
     {   header("Location: Login.php");
         exit();
      }
     else
     {   echo "Error occured";
      }	
  }	 
?>

<!DOCTYPE html>
<html lang="en" >
        <head>
            <meta charset="UTF-8">
            <title>Signup</title>
            <link rel="stylesheet" href="login.css">
            <script src="script.js"></script>
        </head>
        <body>
                <div id="bg"></div>
                <form name='nafo' action='#' method='post' enctype="multipart/form-data">
                    <div class="form-field">
                        <input name="n1" id="sj1" type="text" placeholder="First name" required  onblur="return fnameValidate()" />
                    </div>

                    <div class="form-field">
                        <input name="n2" id="sj2" type="text" placeholder="last name" required onblur="return lnameValidate()" />
                    </div>
                            
                    <div class="form-field">
                        <input name="n3" id="sj3" type="email" placeholder="Email" required onblur="return emailValidate()" />                         
                    </div>

                    <div class="form-field">
                        <input name="n4" id="sj4" type="password" placeholder="Password" required onblur="return validatepwd()" />
                    </div>

                    <div class="form-field">
                        <input name="n5" id="sj5" type="password" placeholder="Confirm Password" required onblur="return validateconfirmPassword()" />
                    </div>
                                
                    <div class="form-field">
                        <input name="n6" id="sj6" type="text" placeholder="City" required onblur="return validatecity()" />                         
                    </div>
                            
                    <div class="form-field">
                        <input name="n7" id="sj7" type="text" placeholder="Contact" required onblur="return cnoValidate()" />                         
                    </div>

                    <div class="form-field">
                        <input name="n8" id="sj8" type="file" placeholder="Profile photo" required onblur="return fileValidation()" />                         
                    </div>

                    <div class="form-field">
                        <button name="n9" id="sj9" class="btn" type="submit" onclick="return registerValid()">Sign in</button>
                    </div>
                </form>
        </body>
</html>

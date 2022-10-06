<?php 
    include ('connect.php'); 
    session_start();

    if(isset($_POST['l3']))
    { $a=$_POST['l1'];
      $b=$_POST['l2'];
      $sql="SELECT * FROM `login_table` WHERE u_email='$a' AND u_pwd='$b'";
      $result = mysqli_query($conn,$sql);
      if(mysqli_num_rows($result)>0)
      {   $row = mysqli_fetch_array($result);
        //   $_SESSION['email']=$row['u_email'];
          if($row['status']=='0')
          {     $_SESSION['email']=$row['u_email'];
                header("Location: User_home_page.php");
                exit();
          }
          elseif ($row['status']=='1') 
          {
            $_SESSION['email']=$row['u_email'];     
            header("Location: Admin_home_page.php");
                exit();
          }
          elseif ($row['status']=='2') 
          { $_SESSION['email']=$row['u_email'];    
            header("Location: Newshead_home_page.php");
                exit();
          }
          else {
            echo 'Invalid username or password';
          }
       }
      else
      {   echo 'Invalid username or password';
       }
      
    }
?> 

<!DOCTYPE html>
<html lang="en" >
      <head>
          <meta charset="UTF-8">
          <title>Login Page</title>
          <link rel="stylesheet" href="login.css">
          <script src="script.js"></script>
      </head>
      <body>
            <div id="bg"></div>
            <form name='nafo' action='#' method='post'>
                <div class="form-field">
                    <input name="l1" id="lj1" type="email" placeholder="Email/Username" required onblur="return fnamenameValidate()"/>
                </div>
                <div class="form-field">
                    <input name="l2" id="lj2" type="password" placeholder="Password" required onblur="return fnamenameValidate()"/>                         
                </div>

                <center><p>Create an account?<a href="signup.php">if not</a></p></center>
          
                <div class="form-field">
                    <button name="l3" id="lj3" class="btn" type="submit" onclick="return loginValid()">Log in</button>
                </div>
            </form>
      </body>
</html>

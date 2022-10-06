<?php
    include "connect.php";
    if(isset($_POST["p3"]))
    {   //  //print_r($_FILES);
        $a=$_FILES["p1"]["name"];
        echo $a;
        move_uploaded_file($_FILES["p1"]["tmp_name"],"pics/".$g);
        $b=$_POST["p2"];
        echo $b;
        $c=$_POST["p4"];
        $out=mysqli_query($conn,"INSERT INTO `userpost`(`u_image`, `u_desc`, `u_time`) VALUES ('$a','$b','$c')" );
        if ($out)
        {   die(header("Location: login.php"));
        }
        else
        {   echo "Error: ".$sql."<br>".mysqli_error($conn);
        }
    }	 
?>

<!DOCTYPE html>
<html lang="en" >
    <head>
        <meta charset="UTF-8">
        <title>Post_feed</title>
        <link rel="stylesheet" href="login.css">
    </head>
    <body>
        <div id="bg">
        </div>
        <center>
            <form method="post" action="#" enctype="multipart/form-data">
                <div class="form-field">
                    <input name="p1" type="file" placeholder="Feed to post" required/>                         
                </div>

                <div class="form-field">
                    <textarea rows=5 cols=45 name="p2" placeholder="Description" required/>   </textarea>                      
                </div>

                <div class="form-field">
                    <button name="p3" class="btn" type="submit">Sign in</button>
                </div>

                <script>
                    `use strict`
                    var datetime = new Date();
                    console.log(datetime);
                    document.getElementById("time").textContent = datetime; //it will print on html page
                </script>
            </form>
        </center>
    </body>
</html>
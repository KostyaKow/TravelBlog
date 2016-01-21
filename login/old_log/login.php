<html>
<head>

   <?php include 'include.php'; ?>
</head>
<body>
   <div id='top-panel'> </div>


   <?php
      if (isset($_POST['name']) && isset($_POST['pass'])) {
         $name = $_POST['name'];
         $pass = $_POST['pass'];

         if ($name == 'ira' && $pass == 'pass') {
            /*$url = 'http://forty7.guru/ira/admin.php'; ///USELESSS DELETEME
            $data = array('token' => 'gentoo-richard4269stalmman', 't2' => '4312');
            // use key 'http' even if you send the request to https://...
            $options = array(
               'http' => array(
                  'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                  'method'  => 'POST',
                  'content' => http_build_query($data),
               ),
            );
            $context  = stream_context_create($options);
            $result = file_get_contents($url, false, $context);
            var_dump($result);*/
      
            echo "<form action='admin.php' method='post' name='frm'>";
            echo "   <input type='hidden' name='t1' value='main'>";
            echo "   <input type='hidden' name='super_secret_3va3' value='gentoo-rms42stalmman69'>";
            echo "</form>";
            echo "<script>document.frm.submit();</script>";
            //echo '<script>post("admin.php", {"super_secret_3va3":"gentoo-rms42stalmman69"</script>';
         }
         else
            echo "<script>alert('wrong login');</script>";
      }

   ?> 

   <div class="container">

      <form class="form-signin" method='post' action='login.php'>
         <h2 class="form-signin-heading">Please sign in</h2>
         <label for="inputEmail" class="sr-only">Username</label>
         <input type="text" name='name' class="form-control" placeholder=" Username" required autofocus>
         <label for="inputPassword" class="sr-only">Password</label>
         <input type="password" name='pass' class="form-control" placeholder="Password" required>
         <!--<div class="checkbox">
            <label>
               <input type="checkbox" value="remember-me"> Remember me
            </label>
         </div>-->
         <center><button style='width:30%' class="btn btn-lg btn-primary btn-block" value='login' type="submit">Sign in</button></center>
      </form>

   </div> <!-- /container -->

</body>
</html>

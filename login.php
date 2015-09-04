<html>
<head>

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
            echo "   <input type='hidden' name='t1' value='gentoo-rms42stalmman69'>";
            echo "</form>";
            echo "<script>document.frm.submit();</script>";
         }
         else
            echo "<script>alert('wrong login');</script>";
      }

   ?> 


   <center>
      <form method='post' action='login.php'>
         Username: <input name='name' type='text'></input>
         Password: <input name='pass' type='password'></input>
         <input type='submit' value='login'>
      </form>
   </center>

</body>
</html>

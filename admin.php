<html>
<head>
   <title>Ira's blog</title>

   <?php include 'include.php' ?>
   <link rel='stylesheet' type='text/css' href='index.css'>
</head>
<body>
   <?php
      if (isset($_POST['t1'])) {
         $token = $_POST['t1'];

         if ($token != 'gentoo-rms42stalmman69') {
            echo '<h2>ERROR: bad token</h2>';
         }
         else {
            include 'admin-real42.php';
         }
      }
      else
         echo '<h1>Hello! Looks like you reached an empty page</h1>';

  ?> 
</body>
</html>

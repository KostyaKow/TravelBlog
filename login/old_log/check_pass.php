<?php
   $checked = true;
   $good_pass = false;
   if (isset($_POST['super_secret_3va3'])) {
      $pass = $_POST['super_secret_3va3'];
      if ($pass == 'gentoo-rms42stalmman69')
         $good_pass = true;
   }

   if (!$good_pass) {
      echo '<h2>ERROR: bad token</h2><!--';
      //throw new Exception('Bad request');
      exit();
   }
?>

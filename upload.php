<?php
   echo $_POST['data'];

   $myfile = fopen("data/1111", "w");
   fwrite($myfile, $_POST['data']); 
?>

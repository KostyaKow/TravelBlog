<?php
   if (!isset($checked))
      include 'check_pass.php';

   date_default_timezone_set('America/New_York');
   //http://php.net/manual/en/function.date.php
   //Y 1999   z 365    23 H   59 i   59 s   654321 u
   //year     day_year hour   minute second microsecond
   //$post_date = date('YzHisu', time());
   $post_date = time();


   $title = $_POST['title'];
   $countries = $_POST['countries'];
   $post = $_POST['data'];

   $json = array(
      'title'     => $title,
      'countries' => $countries,
      'data'      => $post
   );
   $json_str = json_encode($json);

   $myfile = fopen("/root/nginx-html/ira/data/post" . $post_date, "w");
   fwrite($myfile, $json_str); 
   fclose($myfile);
?>

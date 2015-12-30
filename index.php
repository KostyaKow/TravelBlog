<html>
<head>
   <title>Ira's blog</title>
   <link rel='stylesheet' type='text/css' href='index.css'>
   <script src='//code.jquery.com/jquery-1.11.3.min.js'></script>
   <script src='//code.jquery.com/jquery-migrate-1.2.1.min.js'></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>


   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body>
   <!-- <span class="glyphicon glyphicon-search" aria-hidden="true"></span> -->
   <div id='top-pic-div'>
      <img id='top-pic' src='top-pic.jpg'></img>
   </div>

   <ul id='country-list' class="list-group">
      <!-- This is where we will place countries 
      <li class="list-group-item">
         <span class="badge">4</span>
         Europe
      </li> -->
   </ul>

   <div class='top-panel'>
      This is a top panel.
   <div>

   <div id='mainpage-content' style='padding:30px;text-align:center;'>
      Website
   </div>

   <script>
      function addCountry(country, count) {
         var ctrHtml =  "<li class='list-group-item country-item'>";
         ctrHtml += "<span class='badge'>" + count + "</span>";
         ctrHtml += '<a>' + country + '</a>' + "</li>";
         var innerHtml = $('#country-list').html() + ctrHtml;
         $('#country-list').html(innerHtml);
         $('.country-item').css('cursor', 'pointer');

         $('.country-item').click(function (item) {
            var country = $(this).children('a').text();
         });
      }
   </script>

   <?php
      $data_path = '/root/nginx-html/ira/data/';

      $countries = array();
      $entries = scandir('data');

      for ($i = 0; $i < count($entries); ++$i) {
         $filepath = $data_path . $entries[$i];
         $f = fopen($filepath, "r");
         $str_post = fread($f, filesize($filepath));
         $json_post = json_decode($str_post, 1);
         $post_ctrs = $json_post['countries']; //tags
          
         for ($j = 0; $j < count($post_ctrs); $j++) {
            $country = $post_ctrs[$j];
            if (!array_key_exists($country, $countries))
               $countries[$country] = 0;
            $countries[$country]++;
         }
         //print_r($json_post);
      }

      echo '<script>';
      foreach ($countries as $country => $count) {
         echo 'addCountry("' . $country . '", ' . $count . ');';
      }
      echo '</script>';

      //print_r($countries);
   ?>
</body>
</html>

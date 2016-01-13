<html>
<head>
   <title>Ira's blog</title>
   <link rel='stylesheet' type='text/css' href='index.css'>
   <script src='https://code.jquery.com/jquery-2.2.0.js'></script>

   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
   <script src='index.js'></script>

   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body ng-app='iraBlog' ng-controller='iraBlog'>

   <!-- <span class="glyphicon glyphicon-search" aria-hidden="true"></span> -->
   <div id='top-pic-div'>
      <img id='top-pic' src='top-pic.jpg'></img>
   </div>

   <ul id='country-list'>
      <li class='country-item list-group-item' ng-repeat='c in countries' ng-click='countrySelect(c)'>
         <span class='badge'>{{c.count}}</span>
         <a>{{c.name}}</a>
      </li>
   </ul>

   <!--<div class='top-panel'>
      This is a top panel.
   <div>-->

   <div id='mainpage-content' style='padding:30px;text-align:center;'>
      Hello and welcome to my website!
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
      /*
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
      */
   ?>
</body>
</html>

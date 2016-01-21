<html>
<head>
   <title>Ira's blog</title>
   <link rel='stylesheet' type='text/css' href='index.css'>
   <script src='https://code.jquery.com/jquery-2.2.0.js'></script>

   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
   <script>notInNode = true;</script>
   <script src='miscutils.js'></script>
   <script src='index.js'></script>

   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body ng-app='iraBlog' ng-controller='iraBlog'>

   <ul id='topNav' class="nav nav-tabs">
     <li id='HomeLi' class="active"><a href="#">Home</a></li>
     <li id='GalleryLi'><a href="#">Gallery</a></li>
     <li id='AboutLi'><a href="#">About</a></li>
   </ul>

   <!-- <span class="glyphicon glyphicon-search" aria-hidden="true"></span> -->
   <div id='top-pic-div'>
      <img id='top-pic' src='top-pic.jpg'></img>
   </div>

   <ul id='country-list'>
      <li class='country-item list-group-item' ng-repeat='(name, count) in countryCounts' ng-click='countrySelect(name)'>
         <a>{{name}}</a>
         <span class='badge'>{{count}}</span>
      </li>
   </ul>

   <!--<div class='top-panel'>
      This is a top panel.
   <div>-->

   <div id='mainpage-content'>
      <!-- Hello and welcome to my website! -->
      <ul ng-if='showSort' id='sortBy' class="nav nav-tabs">
        <li class="active"><a href="#">Newest</a></li>
        <li><a href="#">Oldest</a></li>
        <li><a href="#">Most viewed</a></li>
      </ul>

      <div id='blogContentContainer'>
         <div class='post-preview' ng-repeat='x in previewList'>
            <!--{{previewList[x]['title']}} -->
            <div>
               <b>
                  <span class='preview-date'>{{ formatPostDate(x) }}</span>
                  <h3 class='preview-title'>{{ x['title'] }}</h3>
               </b>
               <span class='preview-data'>
                  {{ x.data }}
               </span>
               ...
               <a href='javascript:void(0)' ng-click="openPost(x['date'])">
                  Read more
               </a>
            </div>
         </div>
      </div>
   </div>

</body>
</html>

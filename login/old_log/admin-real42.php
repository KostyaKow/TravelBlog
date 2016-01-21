<?php
   if (!isset($checked))
      include 'check_pass.php';
?>

<!-- <button type='button' class='btn btn-success' onclick='Kadmin("main");'>Admin Home</button> -->

<ul class="nav nav-tabs">
  <li role="presentation" class="top-menu"><a href='#' id='main'>Admin Home</a></li>
  <li role="presentation" class="top-menu"><a href='#' id='add_blog'>Add Blog</a></li>
  <li role="presentation" class="top-menu"><a href='#' id='preview'>Preview</a></li>
</ul>

<script>$(function(){
   $('.top-menu').removeClass('active');

   if (page == 'add_blog')
      $('#add_blog').addClass('active');
   else /* if (page == 'main') */
      $('#main').addClass('active');

   $('#main').click(function () { Kadmin("main") });
   $('#add_blog').click(function () { Kadmin("add_blog") });
});</script>


<?php 
   function adminMainPanel() { ?>
      List of countries:</br>
      <ul id='country-list' class="list-group" style='width:15%; float:left; padding: 5px;'>
         <li class="list-group-item">
            <span class="badge">4</span>
            Europe
         </li>
          <li class="list-group-item">
            <span class="badge">5</span>
            Russia
         </li>
          <li class="list-group-item">
            <span class="badge">2</span>
            Ukraine
         </li>

      </ul>

      <ul class="list-group" id='post-list' style='float:left; width:40%; padding: 5px; text-align: center;'>
        <li class="list-group-item">Ukraine attacks Russia</li>
        <li class="list-group-item">Cool pictures from London</li>
        <li class="list-group-item">Very long blog title</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
            <!-- echo '<table><tbody><tr>sdf</tr><tr>Country</tr></tbody></table>'; -->
      </div>

      <!--<button type='button' class='btn btn-success' onclick='Kadmin("add_blog")'>New Blog Entry</button>-->
   <?php }

   function adminAddBlog() { ?>
      Country: <input type="text"></input>

      <div id='text-editor' style='width: 400px; height: 400px;'>

      <?php
         $doc = new DOMDocument();
         $doc->loadHTMLFile('quill/examples/index.html');
         echo $doc->saveHTML(); 
         echo "</div>";
      ?>

      <button onclick='submit_blog()'>Submit KK left here</button> 

      <script>
         function submit_blog() {
            var to_submit = {
               'title' :      'Hello, World!',
               'countries' :  ['Us', 'Russia'],
               'data' :       editor.getHTML(),
               'super_secret_3va3' : 'gentoo-rms42stalmman69'
            }
            post('upload.php', to_submit);
         }
      </script>
   <?php }

   if (!isset($action))
      adminMainPanel();
   else {
      switch ($action) {
      case 'main':
         adminMainPanel();
         echo '<script>page="main";</script>';
         break;
      case 'add_blog':
         adminAddBlog();
         echo '<script>page="add_blog";</script>';
         break;
      }
   }
   

?>



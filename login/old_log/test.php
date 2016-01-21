<html>
   <head>
      <?php include 'include.php'; ?>
      <script type='text/javascript' src='network-code.js'></script>
      <script>
      var to_post = {
         'title' :      'hello',
         'countries' :  ['Us', 'Russia'],
         'data' :       'Hello, World!'
      }
      post('upload.php', to_post);
     </script>
   </head>
   <body>
   </body>
</html>

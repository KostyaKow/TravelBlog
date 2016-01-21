<html>
<head>
   <title>Ira's blog</title>

   <?php include 'include.php'; ?>
   <link rel='stylesheet' type='text/css' href='index.css'>
   <link rel="stylesheet" type="text/css" href="quill/examples/styles/style.css">
   <link rel="stylesheet" type="text/css" href="quill/quill.base.css">
   <script type="text/javascript" src="quill/quill.js"></script>
   <!-- <script src="bselector/js/bootstrap-select.js"></script> -->

   <script>
      $('.selectpicker').selectpicker();
   </script>

</head>
<body>
   <?php
      if (!isset($checked))
         include 'check_pass.php';

   ?>
   <script>
      function Kadmin(action) {
         post_with_redirect("admin.php", {"super_secret_3va3":"gentoo-rms42stalmman69", "t1":action});
      }
   </script>
   <?php
      function Kadmin($action) {
         echo '<script>Kadmin("' + $action + '");</script>';
      }

      if (isset($_POST['t1'])) {
         $action = $_POST['t1'];
         include 'admin-real42.php';
      }
      else
         echo '<h1>Hello! Looks like you reached an empty page</h1>';

  ?> 
</body>
</html>

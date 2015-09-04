
<div id='country-list'> <?php ?>j</div>

<button type='button' class='btn btn-success'>
New Blog Entry
</button>


<?php
   include 'include.php';
   $doc = new DOMDocument();
   $doc->loadHTMLFile('');
   echo $doc->saveHTML(); 

?>

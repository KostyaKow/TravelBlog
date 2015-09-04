
<div id='country-list'> 
   <?php 
      //echo '<table><tbody><tr>sdf</tr><tr>Country</tr></tbody></table>';
   ?> 
</div>

<button type='button' class='btn btn-success'>
New Blog Entry
</button>

<div id='text-editor' style='width: 400px; height: 400px;'>
   <?php
      $doc = new DOMDocument();
      $doc->loadHTMLFile('quill/examples/index.html');
      echo $doc->saveHTML(); 
   ?>
</div>

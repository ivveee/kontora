<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="pinterest" content="nohover"></meta>

  <?php echo css('assets/styles/s.css') ?>

</head>

<!-- sets html class to either "home" - for home page, empty - for text, "rt" - for image-->
<body class="mobile">
  <div class="logo"></div>
  <header class="header">
    <div class="social">
      <a href="https://www.facebook.com/K0NT0RA" class="social-item icon-facebook" target="_blank"></a>
      <a href="http://instagram.com/buro_kontora" class="social-item icon-instagram" target="_blank"></a>
    </div>
  </header>
</body> 
</html>
<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />

  <?= js('//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js') ?>
  <?= js('//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js') ?>

  <!-- library and application scripts. In prod merged into x.js-->
  <?= js('assets/scripts/libs.js') ?>
  <?= js('assets/scripts/app.js') ?>

  <?php echo css('assets/styles/s.css') ?>

</head>

<!-- sets html class to either "home" - for home page, empty - for text, "rt" - for image-->
<body class="<?= ($page->isHomePage()) ? 'home' : '' ?>">

  <div class="logo"></div>
  <header class="header">
    <div class="social">
      <a href="https://www.facebook.com/K0NT0RA" class="social-item icon-facebook" target="_blank"></a>
      <a href="http://instagram.com/buro_kontora" class="social-item icon-instagram" target="_blank"></a>
    </div>
    <div class="switchers">
      <div class="switcher switcher_image is__active"></div>
      <div class="switcher switcher_text"></div>
    </div>
    <div class="info">
      <h3 class="info-header"><a class="js__rearrange" href="/"><?= l::get('kontora') ?></a>:</h3>
      <?= $site->phones() ?>
    </div>
    <div class="info">
      <h3 class="info-header"><a href="<?= $site->address_link() ?>"><?= l::get('address') ?></a>:</h3>
      <?= $site->address() ?>
    </div>
    <div class="info">
      <h3 class="info-header"><a href="mailto:<?= $site->email() ?>"><?= l::get('email') ?></a>:</h3>
      <?= $site->email() ?>
    </div>
    <div class="lang">
      <? $clang = c::get('lang.current'); ?>
      <a href="<?= url($site->uri(), 'ru') ?>" class="lang-item <?= ($clang === 'ru') ? 'is__active' : '' ?>">RU</a>
      <a href="<?= url($site->uri(), 'en') ?>" class="lang-item <?= ($clang === 'en') ? 'is__active' : '' ?>">EN</a>
    </div>
  </header>

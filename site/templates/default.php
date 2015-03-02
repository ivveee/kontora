<?php snippet('header') ?>

<div class="content">
  <div class="article-box js__article-box">
    <article class="article js__article">
      <!-- the "back" box. It takes 100% of screen and sends back to thumbnail menu-->
      <!--a href="/" class="article-home js__article-home"></a--><!--
      <div class="article-box"> -->
        <!-- article contents with titles -->
        <div class="article-in article-text js__article-text">
          <div class="article-holder js__article-holder">
            <dl class="article-header js__article-header">
              <? if ($page->title()) : ?>
                <dt><span><?= l::get('object') ?></span>:</dt>
                <dd><?= $page->title() ?></dd>
              <? endif ?>
              <? if ($page->location()) : ?>
                <dt><span><?= l::get('location') ?></span>:</dt>
                <dd><?= $page->location() ?></dd>
              <? endif ?>
              <? if ($page->year()) : ?>
                <dt><span><?= l::get('year') ?></span>:</dt>
                <dd><?= $page->year() ?></dd>
              <? endif ?>
            </dl>
            <?= kirbytext($page->text()) ?>
            <div class="article-info">
              <?= kirbytext($page->info()) ?>
            </div>
          </div>

        </div>
        <!-- article contents  images -->
        <div class="article-in article-images js__article-image">
          <div class="article-holder">
            <? if ($page->children()->_gallery) : ?>
              <? foreach ($page->children()->_gallery->images() as $image) : ?>
                <img src="<?= $image->url() ?>" alt="">
              <? endforeach ?>
            <? endif ?>
          </div>
          <!--?= snippet('navbox') ?-->
        </div>
      <!-- </div> -->
    </article>
  </div>

</div>

<?= snippet('footer') ?>

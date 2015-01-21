<?php snippet('header') ?>

<div class="content">
  <div class="article-box">
    <article class="article js__article">
      <a href="/" class="article-home js__article-home"></a><!--
      <div class="article-box"> -->
        <div class="article-in article-text js__article-text">
          <div class="article-holder">
            <dl class="article-header">
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

        <div class="article-in article-images js__article-image">
          <div class="article-holder">
            <? if ($page->children()->_gallery) : ?>
              <? foreach ($page->children()->_gallery->images() as $image) : ?>
                <img src="<?= $image->url() ?>" alt="">
              <? endforeach ?>
            <? endif ?>
          </div>
          <?= snippet('navbox') ?>
        </div>
      <!-- </div> -->
    </article>
  </div>

</div>

<?= snippet('footer') ?>

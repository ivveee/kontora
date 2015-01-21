<div class="article-navbox">
  <? if ($page->hasPrev($sort='title', $direction='asc')): ?>
    <a class="article-nav article-nav_prev" href="<?= $page->prev($sort='title', $direction='asc')->url() ?>"><?= l::get('prevproj') ?></a>
  <? else : ?>
    &nbsp;
  <? endif ?>
  <? if ($page->hasNext($sort='title', $direction='asc')): ?>
    <a class="article-nav article-nav_next" href="<?= $page->next($sort='title', $direction='asc')->url() ?>"><?= l::get('nextproj') ?></a>
  <? endif ?>
</div>

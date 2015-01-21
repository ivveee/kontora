<?php snippet('header') ?>

<div class="content">
  <div class="grid js__grid" id="grid">
    <? foreach($pages->find('projects')->children()->visible()->flip() as $project): ?>
      <a class="item js__item" href="<?= $project->url() ?>" id="<?= $project->uid() ?>">
        <span class="item-title">
          <span>
            <b>
              <? if ($project->short()) : ?>
                <?= $project->short() ?>
              <? else : ?>
                <?= $project->title() ?>
              <? endif ?>
            </b>
          </span>
        </span>
        <img src="<?= html($project->images()->find('thumb.jpg')->url())?>" alt="" class="item-image">
      </a>
    <? endforeach ?>
  </div>
</div>

<?php snippet('footer') ?>

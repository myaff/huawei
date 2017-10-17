<div class="modal__wrapper invisible">
  <div id="main-menu" class="modal invisible" data-fullscreen>
    <button class="btn-close js-modal" data-target="#main-menu"></button>
    <div class="modal__content">
      <nav class="nav tp-text--center">
        <ul class="nav__list">
          <?php foreach ($pages as $link) { ?>
            <?php if ($currentPage !== $link['url']) { ?>
              <li class="nav__item"><a href="<?=$link['url'];?>" class="nav__link<?php if (!$link['active']) { ?> disabled<?php } ?>"><?=$link['title'];?></a></li>
            <?php } ?>
          <?php } ?>
          <?php foreach ($interviews as $link) { ?>
            <?php if ($currentPage !== $link['url']) { ?>
              <li class="nav__item"><a href="<?=$link['url'];?>" class="nav__link<?php if (!$link['active']) { ?> disabled<?php } ?>"><?=$link['name'];?></a></li>
            <?php } ?>
          <?php } ?>
        </ul>
      </nav>
      <div class="modal__socials social">
        <div class="social__title">Поделиться проектом в&nbsp;социальных сетях:</div>
        <a href="#" class="social__link" target="_blank" data-type="fb">
          <svg class="icon social__icon">
            <use xlink:href="#facebook"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank" data-type="vk">
          <svg class="icon social__icon">
            <use xlink:href="#vk"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank" data-type="tw">
          <svg class="icon social__icon">
            <use xlink:href="#twitter"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="modal__wrapper modal__wrapper--trans invisible">
  <div id="test-correct" class="modal modal--big invisible" data-fullscreen></div>
  <div id="test-incorrect" class="modal modal--big invisible" data-fullscreen></div>
</div>
<div class="modal__wrapper modal__wrapper--dark invisible">
  <div id="test-result" class="modal modal--dark modal--result invisible" data-fullscreen>
    <button class="btn-close js-modal" data-target="#test-result"></button>
    <div class="modal__content">
      <div class="modal__result result tp-text--center pt-4">
        <div class="result__title tp--uc">Вы угадали</div>
        <div id="sum" class="result__sum tp--uc my-3 mx-auto"></div>
        <div class="result__total tp--uc"> из <span id="total"></span></div>
        <button class="btn btn--alt btn--center my-5 js-test-reset">попробовать еще</button>
      </div>
      <div class="modal__socials">
        <?php include($root.'parts/social-inline.php'); ?>
      </div>
      <div class="modal__footer">
        <a href="index.php" class="modal__footer-link">
          <svg class="icon mr-3"><use xlink:href="#arrow-next-thin"/></svg>
          <span class="text">Читайте о&nbsp;том, как сделать </br>хороший снимок</br>с&nbsp;помощью смартфона</br>в&nbsp;интервью героев </br>проекта</span>
        </a>
      </div>
    </div>
  </div>
</div>
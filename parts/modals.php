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
        <div class="social__title">Поделиться проектом в социальных сетях:</div>
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
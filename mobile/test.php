<?php require('../parts/header-mobile.php');?>
<div class="page page--test">
  <div class="container pt-8 tp-text--center">
    <div class="page__heading tp-heading--huge mb-3">все возможно!</div>
    <div class="page__text mt-6 mb-3">
      <div class="tp-body--wider">
        <p>Каким устройством сняли фотографию?</p>
      </div>
    </div>
    <div class="slider-wrapper">
      <div class="owl-carousel carousel--test">
        <?php foreach ($test as $key => $item) { ?>
          <div class="carousel__item test" data-value="<?=$item['value']?>">
            <div class="test__content">
              <div class="test__photo"><img src="<?=$root?>build/img/test/<?=$item['img'];?>" class="owl-lazy"/></div>
              <div class="test__controls">
                <div class="test__control test__control--camera">
                  <label for="test-<?=$key + 1?>-camera">
                    <input id="test-<?=$key + 1?>-camera" type="radio" name="test-<?=$key + 1?>" value="0" class="test-ctrl hidden">
                    <svg class="icon stroke no-fill"><use xlink:href="#camera"/></svg>
                    <div class="btn btn--alt mx-auto">Фотокамера</div>
                  </label>
                </div>
                <div class="test__control test__control--phone">
                  <label for="test-<?=$key + 1?>-phone">
                    <input id="test-<?=$key + 1?>-phone" type="radio" name="test-<?=$key + 1?>" value="1" class="test-ctrl hidden">
                    <svg class="icon stroke no-fill"><use xlink:href="#phone"/></svg>
                    <div class="btn btn--alt mx-auto"><img src="<?=$root?>build/img/logo_huawei-nova-2.png"/></div>
                  </label>
                </div>
              </div>
            </div>
            <div class="test__number"><?=$key + 1?></div>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</div> <!-- /.page -->
<?php require($root.'parts/footer-mobile.php'); ?>
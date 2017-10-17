<?php require('parts/header.php');?>
<div class="page page--test">
  <div class="container tp-text--center">
    <div class="page__img"><img src="<?=$root?>build/img/logo_huawei-nova-2--black.png" alt="Huawei Nova 2"></div>
    <div class="page__heading tp-heading--huge mb-3">все возможно!</div>
    <div class="page__text mt-3">
      <div class="tp-body--big">
        <p><b>Каким устройством</b> сняли фотографию?</p>
      </div>
    </div>
    <div class="owl-carousel carousel--test">
      <?php foreach ($test as $key => $item) { ?>
        <div class="carousel__item test" data-value="<?=$item['value']?>">
          <div class="test__content">
            <div class="test__control test__control--camera">
              <label for="test-<?=$key + 1?>-camera">
                <input id="test-<?=$key + 1?>-camera" type="radio" name="test-<?=$key + 1?>" value="0" class="test-ctrl hidden">
                <svg class="icon stroke no-fill"><use xlink:href="#camera"/></svg>
                <span class="btn btn--alt">Фотокамера</span>
              </label>
            </div>
            <div class="test__photo mx-5"><img src="<?=$root?>build/img/test/<?=$item['img'];?>" class="owl-lazy"/></div>
            <div class="test__control test__control--phone">
              <label for="test-<?=$key + 1?>-phone">
                <input id="test-<?=$key + 1?>-phone" type="radio" name="test-<?=$key + 1?>" value="1" class="test-ctrl hidden">
                <svg class="icon stroke no-fill"><use xlink:href="#phone"/></svg>
                <span class="btn btn--alt"><img src="<?=$root?>build/img/logo_huawei-nova-2.png"/></span>
              </label>
            </div>
          </div>
          <div class="test__number"><?=$key + 1?></div>
        </div>
      <?php } ?>
    </div>
  </div>
</div> <!-- /.page -->
<?php require('parts/footer.php'); ?>
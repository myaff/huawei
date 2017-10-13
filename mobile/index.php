<?php require('../parts/header-mobile.php');?>
<div class="page page--home">
  <div class="container pt-8 tp-text--center">
    <div class="page__heading tp-heading--huge tp--uc">все возможно!</div>
    <div class="page__text mt-6">
      <div class="tp-body--wide">
        <p>Они владеют высшей математикой фотоискусства и привыкли работать с профессиональными камерами, но мы бросили вызов и дали им в руки Huawei nova2, чтобы посмотреть, что из этого выйдет.</br>
        Сможете ли вы узнать среди снимков те, что были сделаны на смартфон?</br>
        Проверьте себя!</p>
      </div>
      <a href="" class="btn btn--alt mt-4">Пройти тест</a>
    </div>
    <div class="slider-wrapper mt-5">
      <div class="slider owl-carousel carousel--home">
        <?php foreach ($interviews as $key => $interview) { ?>
          <div class="carousel__item interview<?php if (!$interview['active']) { ?> disabled<?php } ?>">
            <div class="interview__photo"><img src="<?=$root?>build/img/home/m-<?=$interview['img'];?>"/></div>
            <div class="interview__heading mt-3">
              <div class="interview__name tp-heading--large"><?=$interview['name'];?></div>
              <div class="interview__position <?php if ($key === 'kb'){ ?>tp-body--main<?php }else{ ?>tp-body--wider<?php } ?>"><?=$interview['position'];?></div>
              <a href="<?=$interview['url'];?>" class="interview__link btn mt-4">Читать интервью</a>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</div> <!-- /.page -->
<?php require($root.'parts/footer-mobile.php'); ?>
<?php require('parts/header.php');?>
<div class="page page--home">
  <div class="container">
    <div class="page__img"><img src="<?=$root?>build/img/logo_huawei-nova-2.png" alt="Huawei Nova 2"></div>
    <div class="page__heading tp-heading--huge mt-2">все возможно!</div>
    <div class="page__text">
      <div class="tp-body--base">
        <p>Они владеют высшей математикой фотоискусства и привыкли работать с профессиональными камерами, но мы бросили вызов и дали им в руки Huawei nova2, чтобы посмотреть, что из этого выйдет.</br>
        Сможете ли вы узнать среди снимков те, что были сделаны на смартфон?</br>
        Проверьте себя!</p>
      </div>
      <a href="" class="btn btn--alt mt-3">Пройти тест</a>
    </div>
    <div class="owl-carousel carousel--home">
      <?php foreach ($interviews as $interview) { ?>
        <div class="carousel__item interview<?php if (!$interview['active']) { ?> disabled<?php } ?>">
          <div class="interview__photo"><img src="<?=$interview['img'];?>"/></div>
          <div class="interview__heading">
            <div class="interview__name tp-heading--large"><?=$interview['name'];?></div>
            <div class="interview__position tp-body--wide"><?=$interview['position'];?></div>
            <a href="<?=$interview['url'];?>" class="interview__link btn mt-4">Читать интервью</a>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>
</div> <!-- /.page -->
<?php require('parts/footer.php'); ?>
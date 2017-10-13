<?php require('variables.php');?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=320">
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&amp;subset=cyrillic" rel="stylesheet">
  <link href="<?=$root;?>build/css/main.css" rel="stylesheet">
  <script src="<?=$root;?>build/js/vendor/jquery-3.1.1.slim.min.js"></script>
  <script src="<?=$root;?>build/img/svg/sprite.js"></script>
  <title>Huawei</title>
</head>
<body>
<div class="svg-placeholder hidden"></div>
<script>$('.svg-placeholder').html(SVG_SPRITE);</script>
<div class="layout layout--mobile">
<div class="header">
	<div class="header__content">
	  <div class="btn-menu__wrapper">
	    <button class="btn-menu js-modal" data-target="#main-menu">
	      <svg class="icon"><use xlink:href="#burger"/></svg>
	    </button>
	  </div>
	  <div class="header__logo logo logo--huawei">
      <a href="#" class="logo__link" target="_blank">
        <img src="<?=$root?>build/img/m-logo-huawei.png" alt="Huawei" />
      </a>
	  </div>
	  <div class="header__logo logo logo--marie-claire">
      <a href="#" class="logo__link" target="_blank">
        <img src="<?=$root?>build/img/m-logo-marie-claire.png" alt="Marie Claire" />
      </a>
	  </div>
	</div>
</div>
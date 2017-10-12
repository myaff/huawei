<?php 
$mainPage = false;
if(strpos($_SERVER['REQUEST_URI'], '/index.php') || preg_match('/huawei\/$/', $_SERVER['REQUEST_URI'])){
	$mainPage = true;
}
$pathArr = explode('/', $_SERVER['REQUEST_URI']);
$root = '';
$interviews = [
  'kb' => [
    'name' => 'Катрин Борисов',
    'position' => 'арт-директор галереи RuArts',
    'url' => 'borisov.php',
    'img' => 'build/img/home/borisov.png',
    'active' => true
  ],
  'az' => [
    'name' => 'Антон Земляной',
    'position' => 'fashion-фотограф',
    'url' => 'zemlianoy.php',
    'img' => 'build/img/home/zemlianoy.png',
    'active' => false
  ],
  'ls' => [
    'name' => 'Лена Сарапульцева',
    'position' => 'fashion-фотограф',
    'url' => 'sarapultseva.php',
    'img' => 'build/img/home/sarapultseva.png',
    'active' => false
  ]
];
?>
<?php 
$mainPage = false;
$pathArr = explode('/', $_SERVER['REQUEST_URI']);
$root = '';
$currentPage = end($pathArr);
if(strpos($_SERVER['REQUEST_URI'], '/index.php') || preg_match('/huawei\/$/', $_SERVER['REQUEST_URI']) || $currentPage === 'index.php'){
	$mainPage = true;
}
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
    'active' => true
  ],
  'ls' => [
    'name' => 'Лена Сарапульцева',
    'position' => 'fashion-фотограф',
    'url' => 'sarapultseva.php',
    'img' => 'build/img/home/sarapultseva.png',
    'active' => true
  ]
];
$pages = [
  'home' => [
    'title' => 'Главная',
    'url' => 'index.php',
    'active' => true
  ],
  'test' => [
    'title' => 'Тест',
    'url' => 'test.php',
    'active' => false
  ]
];
?>
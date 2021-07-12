<?php
$request = explode('/', $_SERVER['PATH_INFO']);
$resource = array_shift($request);


var_dump($request);
var_dump($resource);
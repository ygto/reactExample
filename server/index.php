<?php
require 'vendor/autoload.php';


if (file_exists('users.js')) {

    $users = json_decode(file_get_contents('users.js'), true);
} else {
    $users = [ ];
    $faker = \Faker\Factory::create();
    for ($i = 0; $i < 100; $i++) {
        $id = $i;
        $name = $faker->firstName;
        $surname = $faker->lastName;
        $number = $faker->phoneNumber;
        $users[ $id ] = [
            'id'      => $id,
            'name'    => $name,
            'surname' => $surname,
            'number'  => $number
        ];
        file_put_contents('users.js', json_encode($users));
    }
}


$search = isset($_GET['data']) && $_GET['data'] ? $_GET['data'] : null;

$result = [ ];

foreach ($users as $item) {
    $userText = strtolower($item['name'] . '|' . $item['surname'] . '|' . $item['number']);
    //print_r($userText);
    if ($search && strpos($userText, $search) !== false) {
        $result[] = $item;
    }
}
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
header('Content-Type: application/json');
echo json_encode($result);
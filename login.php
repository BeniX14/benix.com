<?php

// Ellenőrizzük, hogy be van-e jelentkezve a felhasználó
if (!isset($_SESSION["user_id"])) {
  // Ha nem, akkor átirányítjuk a felhasználót a bejelentkezési oldalra
  header("Location: login.php");
  exit;
}

// Lekérjük a barátok listáját
$url = "https://api.epicgames.com/users/me/friends";
$headers = array("Authorization: Bearer " . $_SESSION["access_token"]);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$friends = json_decode($response, true);

// Kilistázzuk a barátokat
foreach ($friends["data"] as $friend) {
  if ($friend["status"] === "online") {
    echo $friend["name"] . "<br>";
  }
}

?>
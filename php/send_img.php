<?php
//on file uploaded

$db = new SQLite3("test.sqlite3")
$ctable = <<< EOF
CREATE TABLE IF NOT EXISTS images(
id integer primary key,
states integer
)
EOF;
$db->exec($ctable);

//重複していない値を探す
$result = $db->query("SELECT id FROM images");
while($cols = $result->fetchArray()){
	
}


$id = 4567;//画像登録ID(必ず重複しない値にする)
$db->query("INSERT INTO images VALUES ({$id}, 1)");

$db->close(); 

echo "{}";//return json text

?>

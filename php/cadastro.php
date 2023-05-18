<?php

$nome = $_POST['nome'];
$sobrenome =$_POST['sobrenome'];
$cpf =  $_POST['cpf'];
$rg = $_POST['rg'];
$cell = $_POST['cell'];
$cep =  $_POST['cep'];
$rua =  $_POST['rua'];
$num =  $_POST['num'];
$bairro =  $_POST['bairro'];
$cidade =  $_POST['cidade'];
$estado =  $_POST['estado'];
$email = $_POST['email'];

$cliente = array(
  $nome, $sobrenome, $cpf, $rg, $cell, $cep, $rua, $num, $bairro, $cidade, $estado, $email
);
for ($x = 0; $x < count($cliente); $x++) {
 echo $cliente[$x] . "<br>";
}

$caminho = "cadastros\cliente.txt"; //caminho onde sera criado o arquivo
$conteudo = "
Cliente: $cliente[0],$cliente[1],$cliente[2],$cliente[3],$cliente[4],$cliente[5],$cliente[6],$cliente[7],$cliente[8],$cliente[9], $cliente[10], $cliente[11]
";


if (file_put_contents($caminho, $conteudo, FILE_APPEND)) {
 echo "<script> alert('Dados cadastrado com sucesso');</script>";
} else {
 echo "<script> alert('Erro ao cadastrar!');</script>";
}

?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $sugerencia = htmlspecialchars($_POST['sugerencia']);

    // Guardar la sugerencia en un archivo o base de datos
    $archivo = fopen("sugerencias.txt", "a");
    fwrite($archivo, "Nombre: $nombre\nSugerencia: $sugerencia\n\n");
    fclose($archivo);

    echo "Gracias por tu sugerencia!";
}
?>

//validacion del login de usuario

$("#frmAcceso").on('submit', function (e) {

    e.preventDefault();
    logina = $("#logina").val();
    clavea = $("#clavea").val();

    //Se verifican los datos
    $.post("../controlador/usuario.php?op=verificar", {"logina": logina, "clavea": clavea}, function (data) {

        if (data != "null") {

            $(location).attr("href", "escritorio.php");
        } else {

            bootbox.alert("Usuario y/o Password incorrectos.");
        }

    });




});
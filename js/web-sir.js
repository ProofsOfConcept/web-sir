$(document).ready(function () {

    $.get("views/header.html", function (data) {
        $("#web-sir-header-id").html(data);
    });

    $.get("views/lista.html", function (data) {
        $("#web-sir-body-id").html(data);
        $("#table-list-protocolos").DataTable({
            responsive: true,
            language: {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
            }
        });

    });

    $.get("views/footer.html", function (data) {
        $("#web-sir-footer-id").html(data);
        var navegador = "";
        var bindex = 0;
        var ua = window.navigator.userAgent;

        if (ua.match(/iPad/i) || ua.match(/iPhone/i) || ua.match(/iPod/i)) {
            navegador = 'iOS';
        } else if (ua.match(/Android/i)) {
            navegador = 'Android';
        } else if ((ua.indexOf("Opera") || ua.indexOf('OPR')) != -1) {
            navegador = ua;
        } else if (ua.indexOf("Chrome") != -1) {
            bindex = ua.indexOf("Chrome");
            navegador = "Chrome " + ua.substring(bindex + 7, bindex + 9);
        } else if (ua.indexOf("Safari") != -1) {
            navegador = "Safari " + ua.substring(bindex + 7, bindex + 9);
        } else if (ua.indexOf("Firefox") != -1) {
            bindex = ua.indexOf("Firefox");
            navegador = "Firefox " + ua.substring(bindex + 8, ua.length);
        } else if ((ua.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {//IF IE > 10
            var msie = ua.indexOf("MSIE ");
            var rv = -1;

            if (msie > 0 || !!ua.match(/Trident.*rv\:11\./)) {// If Internet Explorer, return version number
                if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                    //For IE 11 >
                    if (navigator.appName == 'Netscape') {
                        var ua = navigator.userAgent;
                        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                        if (re.exec(ua) != null) {
                            rv = parseFloat(RegExp.$1);
                            navegador = 'IE ' + rv;
                        }
                    } else {
                        navegador = 'desconhecido';
                    }
                } else {
                    //For < IE11
                    navegador = 'IE ' + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                }
            }
        } else {
            navegador = ua;
        }
        $("#bnavigator").html(navegador);
    });


});
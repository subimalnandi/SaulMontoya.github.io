var arr = 
[
{"link": "http://www.gidahatari.com/ht-es/taller-online-de-introduccion-al-python", "title": "Taller Online de Introducci\u00f3n al Python - 11  de Noviembre 2016"},
{"link": "http://www.gidahatari.com/ht-es/taller-de-campo-de-geofisica-tomografias-electricas-resistivas", "title": "Taller de campo de Geof\u00edsica - Tomograf\u00edas el\u00e9ctricas resistivas, Lima 17 de Nov 2016"},
{"link": "http://www.gidahatari.com/cu-dt/curso-online-de-manejo-e-interpretacion-de-datos-de-qumica-del-agua", "title": "Curso presencial y online de Manejo e Interpretaci\u00f3n de Datos de Qu\u00edmica del Agua. 5, 7, 9, 13, 15 y 16 Dic 2016"},
{"link": "http://www.gidahatari.com/cu-dt/curso-de-modelamiento-de-acuiferos-con-modflow-y-model-muse-lima-16-18-dic-2016", "title": "Curso presencial y online de Modelamiento de Acu\u00edferos con MODFLOW y Model Muse, 16-18 Dic 2016"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-modelacion-hidrologica-en-la-gestion-de-recursos-hidricos-con-hec-hms-y-hec-ressim", "title": "Curso presencial y online de Modelamiento Hidrol\u00f3gico en la Gesti\u00f3n del Agua con HEC-HMS y HEC-ResSim. 13-15 Ene 2017"}
]

    var tit_small = "";
    var tit_large = "";
    var c_lug = "";
    var c_fec = "";
    var fig_fon = Math.floor((Math.random() * 5)) + '.png';
    console.log(fig_fon);
    var lin_url = "";
    var i = Math.floor((Math.random() * arr.length));
    //tit_small += arr[i].titulosmall;
    tit_large += arr[i].title;
    //c_lug += arr[i].lugar;
    //c_fec += arr[i].fecha;
    //fig_fon += arr[i].figurafondo;
    lin_url += arr[i].link;
    document.getElementById("cutitulosmall").innerHTML = tit_small;
    document.getElementById("cutitulolarge").innerHTML = tit_large;
    document.getElementById("culugar").innerHTML = c_lug;
    document.getElementById("cufecha").innerHTML = c_fec;
    document.getElementById("cufigurafondo").innerHTML = '<img src=' + fig_fon + ' class="cub-imgcur cub-gen-imgcur-animation" >';
    document.getElementById("cucontenidolink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none" target="_blank"><span class="cub-div-fcontent cub-contbold">Contenido</span></a>'
    document.getElementById("cuinscripcionlink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none" target="_blank"><span class="cub-div-fcontent cub-contbold">Inscripción</span></a>'

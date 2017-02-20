var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-reglamentacion-y-modelamiento-del-caudal-ecologico", "title": "Curso presencial y online de Reglamentaci\u00f3n y Modelamiento del Caudal Ecol\u00f3gico. 3-5 Mar 2017 "},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-sig-en-la-gestion-del-agua", "title": "Curso presencial y online de SIG en la Gesti\u00f3n del Agua, 6 - 11 Mar 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-modelamiento-de-transporte-de-contaminantes-con-modflow-y-mt3dms", "title": "Curso presencial y online de Modelamiento de Transporte de Contaminantes con MODFLOW y MT3DMS, 13 - 18 Mar 2017 "},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-hidrologia-aplicada-con-hec-hms", "title": "Curso presencial y online de Hidrolog\u00eda Aplicada con HEC-HMS, 3 - 8  Abr 2017 "},
{"link": "http://www.gidahatari.com/ht-es/taller-online-de-modelamiento-del-caudal-ecologico-con-rs-minerve", "title": "Taller Online de Modelamiento Hidrol\u00f3gico para determinaci\u00f3n del Caudal Ecol\u00f3gico con Rs Minerve"},
{"link": "http://www.gidahatari.com/ht-es/taller-gratuito-de-simulacion-dinamica-de-inundaciones-con-hec-ras-50", "title": "Taller online gratuito de simulaci\u00f3n din\u00e1mica de inundaciones con HEC-RAS 5.0 - 24 Feb 2017"}
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

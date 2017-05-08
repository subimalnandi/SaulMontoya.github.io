var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-python-en-hidrologia", "title": "Curso presencial y online de Python en Hidrolog\u00eda, 09, 11, 13, 16, 18 y 20 May 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-qgis-basico", "title": "Curso presencial y online de QGIS b\u00e1sico.  22, 24, 25, 27, 29 y 31 May 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-reglamentacin-de-derechos-de-uso-y-permisos-del-agua-y-planes-integrales-de-adaptacin-a-los-ecas-y-lmps-12-14-16-19-21-y-23-jun-2017", "title": "Curso presencial y online de Reglamentaci\u00f3n de Permisos del Agua y Planes Integrales de Adaptaci\u00f3n a los ECAs y LMPs, 12 al 23 Jun 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-de-implementacion-de-sensores-ambientales-continuos-con-raspberry-pi-3-y-arduino", "title": "Curso presencial y online de Implementaci\u00f3n de Sensores Ambientales Cont\u00ednuos con Raspberry Pi 3 y Arduino, 09 - 14 Oct 2017"}
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

var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-de-reglamentacion-de-permisos-del-agua-y-planes-integrales-de-adaptacion-a-los-ecas-y-lmps", "title": "Curso presencial y online de Reglamentaci\u00f3n de Permisos del Agua y Planes Integrales de Adaptaci\u00f3n a los ECAs y LMPs, 12 al 23 Jun 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-introduccion-a-la-hidroquimica-y-modelamiento-hidroquimico-con-phreeqc", "title": "Curso presencial y online de Introducci\u00f3n a la Hidroquimica y Modelamiento Hidroquimico con PHREEQC, 26, 28, 30 Jun y 03, 05, 07 Jul 2017 "},
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

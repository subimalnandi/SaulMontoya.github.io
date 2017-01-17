var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-procesamiento-de-imagenes-de-drone-con-opendronemap-y-qgis", "title": "Curso presencial y online de Procesamiento de Im\u00e1genes de Drone con OpenDroneMap y QGIS. 17-20 Ene 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-modelamiento-de-acuferos-con-modflow-y-model-muse-23-25-27-ene-30-01-y-03-feb-2017", "title": "Curso presencial y online de Modelamiento de Acu\u00edferos con MODFLOW y Model Muse, 23, 25 , 27  Ene - 30, 01 y 03  Feb 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-modelamiento-de-zona-de-mezcla-con-openfoam", "title": "Curso presencial y online de Modelamiento de Zona de Mezcla con OpenFoam, 13, 15, 16, 17 Feb 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-python-basico", "title": "Curso presencial y online de Python B\u00e1sico, Lima, 20-25 Feb 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-reglamentacion-y-modelamiento-del-caudal-ecologico", "title": "Curso presencial y online de Reglamentaci\u00f3n y Modelamiento del Caudal Ecol\u00f3gico. 3-5 Mar 2017 "}
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

var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-hidrologia-aplicada-con-hec-hms", "title": "Curso presencial y online de Hidrolog\u00eda Aplicada con HEC-HMS, 03, 05, 07, 10, 12 y 14 Abr 2017 "},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-hidrogeologia-en-mineria", "title": "Curso presencial y online de Hidrogeolog\u00eda en Miner\u00eda, Lima, 24-29 Abr 2017"}
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

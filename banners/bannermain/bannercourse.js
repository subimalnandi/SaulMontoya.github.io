
var arr =
[
{
"titulosmall": "Curso de",
"titulolarge": "Python en Hidrología",
"lugar": "Lima",
"fecha": "10-12 Jun",
"figurafondo": "http://saulmontoya.github.io/banners/bannermain/python.png",
"url": "http://gidahatari.com/cu-dt/curso-de-python-en-hidrologia-lima-10-12-junio-2016",
},
{
"titulosmall": "Curso de",
"titulolarge": "SIG en la Gestión del Agua",
"lugar": "Lima",
"fecha": "8-10 Jul",
"figurafondo": "http://saulmontoya.github.io/banners/bannermain/gis.png",
"url": "http://gidahatari.com/cu-dt/curso-de-sig-en-la-gestion-del-agua-lima-8-10-jul-2016",
},
{
"titulosmall": "Curso de",
"titulolarge": "Modelamiento de Acuíferos con MODFLOW y Model Muse",
"lugar": "Lima",
"fecha": "20-22 May",
"figurafondo": "http://saulmontoya.github.io/banners/bannermain/modelamiento.png",
"url": "http://gidahatari.com/cu-dt/curso-de-modelamiento-de-acuiferos-con-modflow-y-model-muse-lima-13-15-may-2016"
}
];

    var tit_small = "";
    var tit_large = "";
    var c_lug = "";
    var c_fec = "";
    var fig_fon = "";
    var lin_url = "";
    var i = Math.floor((Math.random() * arr.length));
    tit_small += arr[i].titulosmall;
    tit_large += arr[i].titulolarge;
    c_lug += arr[i].lugar;
    c_fec += arr[i].fecha;
    fig_fon += arr[i].figurafondo;
    lin_url += arr[i].url;
    document.getElementById("cutitulosmall").innerHTML = tit_small;
    document.getElementById("cutitulolarge").innerHTML = tit_large;
    document.getElementById("culugar").innerHTML = c_lug;
    document.getElementById("cufecha").innerHTML = c_fec;
    document.getElementById("cufigurafondo").innerHTML = '<img src=' + fig_fon + ' class="cub-imgcur cub-gen-imgcur-animation" >';
    document.getElementById("cucontenidolink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none"><span class="cub-div-fcontent cub-contbold">Contenido</span></a>'
    document.getElementById("cuinscripcionlink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none"><span class="cub-div-fcontent cub-contbold">Inscripción</span></a>'

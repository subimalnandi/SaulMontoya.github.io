
var arr = 
[
{
"titulosmall": "Desarrollo",
"titulolarge": "Balances Hídricos",
"item1small": "A nivel",
"item1large": "Cuenca",
"item2small": "A nivel",
"item2large": "Mina",
"item3small": "Cálculo",
"item3large": "Demanda",
"item4small": "Simulación",
"item4large": "Proyecciones",
"figurafondo": "http://akamtec.com/banner/bannerservices/balance.png"
},
{
"titulosmall": "Estudios",
"titulolarge": "Agua Subterránea",
"item1small": "Régimen",
"item1large": "Flujo",
"item2small": "Calidad",
"item2large": "Agua",
"item3small": "Análisis",
"item3large": "Disponibilidad",
"item4small": "Evaluación",
"item4large": "Impacto",
"figurafondo": "http://akamtec.com/banner/bannerservices/hidrogeologia.png"
},
{
"titulosmall": "Modelamiento",
"titulolarge": "Hidrológico",
"item1small": "Cálculo",
"item1large": "Escorrentía",
"item2small": "Máximas",
"item2large": "Avenidas",
"item3small": "Drenaje",
"item3large": "Pluvial",
"item4small": "Dimensión",
"item4large": "Reservorios",
"figurafondo": "http://akamtec.com/banner/bannerservices/hidrologia.png"
},
{
"titulosmall": "Hidráulica",
"titulolarge": "Fluvial",
"item1small": "Cálculo",
"item1large": "Sedimentos",
"item2small": "Erosión",
"item2large": "Rios",
"item3small": "Zonas",
"item3large": "Inundación",
"item4small": "Zona",
"item4large": "Mezcla",
"figurafondo": "http://akamtec.com/banner/bannerservices/hidraulica.jpg"
},
{
"titulosmall": "Hidrogeología",
"titulolarge": "Minera",
"item1small": "Ingresos",
"item1large": "Labores",
"item2small": "Cierre",
"item2large": "Minas",
"item3small": "Simulación",
"item3large": "Impacto",
"item4small": "Trasporte",
"item4large": "Contaminantes",
"figurafondo": "http://akamtec.com/banner/bannerservices/mineria.png"
}
];

    var tit_small = "";
    var tit_large = "";
    var it1_small = "";
    var it1_large = "";
    var it2_small = "";
    var it2_large = "";
    var it3_small = "";
    var it3_large = "";
    var it4_small = "";
    var it4_large = "";
    var fig_fon = "";
    var i = Math.floor((Math.random() * arr.length));
    tit_small += arr[i].titulosmall;
    tit_large += arr[i].titulolarge;
    it1_small += arr[i].item1small;
    it1_large += arr[i].item1large;
    it2_small += arr[i].item2small;
    it2_large += arr[i].item2large;
    it3_small += arr[i].item3small;
    it3_large += arr[i].item3large;
    it4_small += arr[i].item4small;
    it4_large += arr[i].item4large;
    fig_fon += arr[i].figurafondo;
    document.getElementById("titulosmall").innerHTML = tit_small;
    document.getElementById("titulolarge").innerHTML = tit_large;
    document.getElementById("item1small").innerHTML = it1_small;
    document.getElementById("item1large").innerHTML = it1_large;
    document.getElementById("item2small").innerHTML = it2_small;
    document.getElementById("item2large").innerHTML = it2_large;
    document.getElementById("item3small").innerHTML = it3_small;
    document.getElementById("item3large").innerHTML = it3_large;
    document.getElementById("item4small").innerHTML = it4_small;
    document.getElementById("item4large").innerHTML = it4_large;
    document.getElementById("figurafondo").innerHTML = '<img src=' + fig_fon + ' class="gwd-img-fondo gwd-gen-bac-animation" >';





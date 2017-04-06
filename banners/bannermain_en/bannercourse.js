var arr = 
[
{"link": "http://www.hatarilabs.com/ht-en/2017/3/17/webminar-on-groundwater-modeling-with-modflow-and-model-muse-may-15-2017", "title": "Webminar on Groundwater Modeling with MODFLOW and Model Muse - May, 15 2017"},
{"link": "http://www.hatarilabs.com/ht-en/2017/6/21/webminar-on-regional-groundwater-modeling-with-geology-on-modflow-and-model-muse-july-06-2017", "title": "Webminar on Regional Groundwater Modeling with Geology on MODFLOW and Model Muse - July, 6 2017"},
{"link": "http://www.hatarilabs.com/ht-en/2017/9/15/webminar-open-source-software-for-groundwater-modeling-the-modflowqgis-stack-10-august-2017", "title": "Webminar: Open Source Software for Groundwater Modeling: The MODFLOW/QGIS Stack - 10 August 2017"}
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
    document.getElementById("cucontenidolink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none" target="_blank"><span class="cub-div-fcontent cub-contbold">Content</span></a>'
    document.getElementById("cuinscripcionlink").innerHTML = '<a href=' + lin_url + ' style="text-decoration: none" target="_blank"><span class="cub-div-fcontent cub-contbold">Register</span></a>'

var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ne_10m_airports0 = new ol.format.GeoJSON();
var features_ne_10m_airports0 = format_ne_10m_airports0.readFeatures(json_ne_10m_airports0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ne_10m_airports0.addFeatures(features_ne_10m_airports0);var lyr_ne_10m_airports0 = new ol.layer.Vector({
                source:jsonSource_ne_10m_airports0, 
                style: style_ne_10m_airports0,
                title: "ne_10m_airports"
            });

lyr_ne_10m_airports0.setVisible(true);
var layersList = [baseLayer,lyr_ne_10m_airports0];
lyr_ne_10m_airports0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'IATA Code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'Type_1': 'Type_1', });
lyr_ne_10m_airports0.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'WebView', 'natlscale': 'Hidden', 'Type_1': 'TextEdit', });
lyr_ne_10m_airports0.set('fieldLabels', {'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'Type_1': 'no label', });
lyr_ne_10m_airports0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
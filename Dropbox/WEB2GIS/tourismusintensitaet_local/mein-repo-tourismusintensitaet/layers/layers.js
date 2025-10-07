ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([645716.176853, 4879141.607582, 2860915.036314, 6038142.663740]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sdeuropa_1 = new ol.format.GeoJSON();
var features_Sdeuropa_1 = format_Sdeuropa_1.readFeatures(json_Sdeuropa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sdeuropa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sdeuropa_1.addFeatures(features_Sdeuropa_1);
cluster_Sdeuropa_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Sdeuropa_1
});
var lyr_Sdeuropa_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Sdeuropa_1, 
                style: style_Sdeuropa_1,
                popuplayertitle: 'Südeuropa',
                interactive: true,
    title: 'Südeuropa<br />\
    <img src="styles/legend/Sdeuropa_1_0.png" /> 🟢 Gering<br />\
    <img src="styles/legend/Sdeuropa_1_1.png" /> 🟡 Mittel<br />\
    <img src="styles/legend/Sdeuropa_1_2.png" /> 🔴 Mittel–Hoch<br />\
    <img src="styles/legend/Sdeuropa_1_3.png" /> 🔴 Hoch<br />\
    <img src="styles/legend/Sdeuropa_1_4.png" /> 🔴 Sehr hoch<br />\
    <img src="styles/legend/Sdeuropa_1_5.png" /> 🔴 Sehr hoch (saisonabhängig hoch)<br />' });
var format_Lndergrenzenweltweit3857gpkg_2 = new ol.format.GeoJSON();
var features_Lndergrenzenweltweit3857gpkg_2 = format_Lndergrenzenweltweit3857gpkg_2.readFeatures(json_Lndergrenzenweltweit3857gpkg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lndergrenzenweltweit3857gpkg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lndergrenzenweltweit3857gpkg_2.addFeatures(features_Lndergrenzenweltweit3857gpkg_2);
var lyr_Lndergrenzenweltweit3857gpkg_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lndergrenzenweltweit3857gpkg_2, 
                style: style_Lndergrenzenweltweit3857gpkg_2,
                popuplayertitle: 'Ländergrenzen weltweit 3857.gpkg',
                interactive: false,
                title: '<img src="styles/legend/Lndergrenzenweltweit3857gpkg_2.png" /> Ländergrenzen weltweit 3857.gpkg'
            });
var group_TOURISMUSINTENSITT = new ol.layer.Group({
                                layers: [lyr_Sdeuropa_1,],
                                fold: 'open',
                                title: 'TOURISMUSINTENSITÄT'});
var group_sterreichUnitedKingdomIrland = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Österreich, United Kingdom, Irland'});
var group_SEHENSWRDIGKEITENNACHLNDERN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SEHENSWÜRDIGKEITEN NACH LÄNDERN'});
var group_EUROPAallgemein = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EUROPA allgemein'});
var group_STERREICH = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ÖSTERREICH'});
var group_REGIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'REGIONSEBENE'});
var group_BADEPLTZE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BADEPLÄTZE'});
var group_NATURBELASSENEGEBIETEsterreich = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATURBELASSENE GEBIETE - Österreich'});
var group_TSCHECHIEN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TSCHECHIEN'});
var group_AUSSERHALBEUROPAS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AUSSERHALB EUROPAS'});
var group_NATIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATIONSEBENE'});
var group_GRENZENundREGIONEN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GRENZEN und REGIONEN'});
var group_ProvinzgrenzenEuropa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Provinzgrenzen Europa'});
var group_austria_100_tourism_spots = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'austria_100_tourism_spots'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Sdeuropa_1.setVisible(true);lyr_Lndergrenzenweltweit3857gpkg_2.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_TOURISMUSINTENSITT,lyr_Lndergrenzenweltweit3857gpkg_2];
lyr_Sdeuropa_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Kategorie': 'Kategorie', 'Belastung': 'Belastung', 'Saison': 'Saison', 'Ursachen__': 'Ursachen__', 'Land': 'Land', });
lyr_Lndergrenzenweltweit3857gpkg_2.set('fieldAliases', {'fid': 'fid', 'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_Sdeuropa_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Kategorie': 'TextEdit', 'Belastung': 'TextEdit', 'Saison': 'TextEdit', 'Ursachen__': 'TextEdit', 'Land': 'TextEdit', });
lyr_Lndergrenzenweltweit3857gpkg_2.set('fieldImages', {'fid': 'TextEdit', 'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_Sdeuropa_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'Kategorie': 'inline label - always visible', 'Belastung': 'inline label - always visible', 'Saison': 'inline label - always visible', 'Ursachen__': 'inline label - always visible', 'Land': 'inline label - visible with data', });
lyr_Lndergrenzenweltweit3857gpkg_2.set('fieldLabels', {'fid': 'no label', 'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_Lndergrenzenweltweit3857gpkg_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
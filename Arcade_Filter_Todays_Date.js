var arcgis_portal = Portal('https://www.arcgis.com');
// The month (0-11) starts from 0 is January and 11 is December, so need to increment by 1 to match Current Month
var current_month = Month(Today()) + 1
// Filter Layer by using SQL EXTRACT DATE Function
var agol_lyr = Filter(FeatureSetByPortalItem(
    arcgis_portal,
    'itemid',
    0,
    ['field_1','field_2','datefield'],
    false),
    `EXTRACT(DAY FROM datefield) = ${Day(Today())}
    AND EXTRACT(MONTH FROM datefield) = ${current_month}
AND EXTRACT(YEAR FROM datefield) = ${Year(Today())}`
)
return agol_lyr
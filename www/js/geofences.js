/*
 * HMS Location Kit Cordova Starter Project - geofences.js 
 */

const $ = (_id) => document.getElementById(_id);

const onDeviceReady = () => {

    // HMSGeofence initialize
    HMSGeofence.init();
}
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

$('createGeofenceList').onclick = async () => {
    const geofence1 = {
        longitude: 42.0,
        latitude: 32.0,
        radius: 40.0,
        uniqueId: 'geofence' + Math.random() * 10000,
        conversions: 1,
        validContinueTime: 10000.0,
        dwellDelayTime: 10,
        notificationInterval: 1,
    };

    const geofence2 = {
        longitude: 40.0,
        latitude: 25.0,
        radius: 330.0,
        uniqueId: 'geofence' + Math.random() * 10000,
        conversions: 2,
        validContinueTime: 1000.0,
        dwellDelayTime: 10,
        notificationInterval: 1,
    };

    const createGeofenceListResult = await HMSGeofence.createGeofenceList(
        [geofence1, geofence2],
        HMSGeofence.GeofenceRequestConstants.ENTER_INIT_CONVERSION,
        HMSGeofence.GeofenceRequestConstants.COORDINATE_TYPE_WGS_84
    );
    console.log({
        createGeofenceListResult
    });
    $('createGeofenceListResult').innerHTML = JSON.stringify(createGeofenceListResult, null, 1);
};

$('registerGeofenceUpdates').onclick = async () => {
    registerHMSEvent(HMSGeofence.Events.GEOFENCE_RESULT, (result) => {
        console.log('new geofence update');
        $('geofenceUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    });
};
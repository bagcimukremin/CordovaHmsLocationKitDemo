/*
 * HMS Location Kit Cordova Starter Project - fusedLocation.js 
 */
const newLocationRequest = () => {
    return {
        id: 'locationRequest' + Math.random() * 10000,
        priority: HMSFusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
        interval: 3,
        numUpdates: 10,
        fastestInterval: 1000.0,
        expirationTime: 200000.0,
        expirationTimeDuration: 200000.0,
        smallestDisplacement: 0.0,
        maxWaitTime: 2000000.0,
        needAddress: true,
        language: 'en',
        countryCode: 'en',
    }
};
const $ = (_id) => document.getElementById(_id);

const onDeviceReady = () => {

    // HMSFusedLocation initialize
    HMSFusedLocation.init();
}
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

// Request location permission
$('requestPermission').onclick = async () => {
    const permissionResult = await HMSFusedLocation.requestPermission();
    console.log({
        permissionResult
    });
};

$('hasPermission').onclick = async () => {
    const hasPermissionResult = await HMSFusedLocation.hasPermission();
    console.log({
        hasPermissionResult
    });
    $('hasPermissionResult').innerHTML = JSON.stringify(hasPermissionResult, null, 1);
};

$('getLastLocation').onclick = async () => {
    const lastLocation = await HMSFusedLocation.getLastLocation();
    console.log({
        lastLocation
    });
    $('getLastLocationResult').innerHTML = JSON.stringify(lastLocation, null, 1);
};

$('getLocationAvailability').onclick = async () => {
    const locationAvailability = await HMSFusedLocation.getLocationAvailability();
    console.log({
        locationAvailability
    });
    $('getLocationAvailabilityResult').innerHTML = JSON.stringify(locationAvailability, null, 1);
};

$('flushLocations').onclick = async () => {
    const flushLocationsResult = await HMSFusedLocation.flushLocations();
    console.log({
        flushLocationsResult
    });
    $('flushLocationsResult').innerHTML = JSON.stringify(flushLocationsResult, null, 1);
};

$('checkLocationSettings').onclick = async () => {
    const locationSettingsResult = await HMSFusedLocation.checkLocationSettings({
        alwaysShow: true,
        needBle: true,
        locationRequests: [newLocationRequest()]
    });

    console.log({
        locationSettingsResult
    });
    $('checkLocationSettingsResult').innerHTML = JSON.stringify(locationSettingsResult, null, 1);
};

document.getElementById('getLastLocationWithAddress').onclick = async () => {
    const getLastLocationWithAddressResult = await HMSFusedLocation.getLastLocationWithAddress(newLocationRequest());

    console.log({
        getLastLocationWithAddressResult
    });
    $('getLastLocationWithAddressResult').innerHTML = JSON.stringify(getLastLocationWithAddressResult, null, 1);
};

$('enableMockMode').onclick = async () => {
    const setMockModeResult = await HMSFusedLocation.setMockMode(true);
    console.log({
        setMockModeResult
    });
};

$('disableMockMode').onclick = async () => {
    const setMockModeResult = await HMSFusedLocation.setMockMode(false);
    console.log({
        setMockModeResult
    });
};

$('setMockLocation').onclick = async () => {
    const setMockLocationResult = await HMSFusedLocation.setMockLocation({
        latitude: parseFloat($("mockLat").value),
        longitude: parseFloat($("mockLong").value)
    });
    console.log({
        setMockLocationResult
    });
};

const locationUpdateRequests = [];
$('requestLocationUpdates').onclick = async () => {
    const requestLocationUpdatesResult = await HMSFusedLocation.requestLocationUpdates(newLocationRequest());
    console.log({
        requestLocationUpdatesResult
    });
    locationUpdateRequests.push(requestLocationUpdatesResult.id);
    $('requestLocationUpdatesResult').innerHTML = JSON.stringify(requestLocationUpdatesResult, null, 1);
};

$('registerLocationUpdates').onclick = async () => {
    registerHMSEvent("onScanningResult", (result) => {
        console.log('new location update');
        $('locationUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    })
};

$('removeLocationUpdateRequests').onclick = async () => {
    console.log("Removing location update requests...");
    locationUpdateRequests.forEach(async requestCode => {
        const result = await HMSFusedLocation.removeLocationUpdates(requestCode);
        console.log({
            requestCode,
            result
        });
    });
    locationUpdateRequests.length = 0; // clear the array
};
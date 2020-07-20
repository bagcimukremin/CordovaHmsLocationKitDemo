/*
 * HMS Location Kit Cordova Starter Project - activityIdentification.js 
 */

const $ = (_id) => document.getElementById(_id);

const onDeviceReady = () => {

    // HMSActivityIdentification initialize
    HMSActivityIdentification.init();
}
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

$('requestActivityIdentificationPermisson').onclick = async () => {
    const getPermResult = await HMSActivityIdentification.requestPermission();
    console.log({
        getPermResult
    });
    $('getPermResult').innerHTML = JSON.stringify(getPermResult, null, 1);
};

$('hasActivityPermission').onclick = async () => {
    const hasActivityPermissionResult = await HMSActivityIdentification.hasPermission();
    console.log({
        hasActivityPermissionResult
    });
    $('hasActivityPermissionResult').innerHTML = JSON.stringify(hasActivityPermissionResult, null, 1);
};

const activityConversionUpdateRequests = [];
$('createActivityConversionUpdates').onclick = async () => {
    const activityConversions = [
        // STILL
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.STILL
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.STILL
        },

        // ON FOOT
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.FOOT
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.FOOT
        },

        // RUNNING
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.RUNNING
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.RUNNING
        }
    ];

    const activityConversionResult = await HMSActivityIdentification.createActivityConversionUpdates(activityConversions);
    console.log({
        activityConversionResult
    });
    activityConversionUpdateRequests.push(activityConversionResult.requestCode);
    $('createActivityConversionUpdatesResult').innerHTML = JSON.stringify(activityConversionResult, null, 1);
};

const activityIdentificationUpdateRequests = [];
$('createActivityIdentificationUpdates').onclick = async () => {
    const activityIdentificationUpdates = await HMSActivityIdentification.createActivityIdentificationUpdates(2000);
    console.log({
        activityIdentificationUpdates
    });
    activityIdentificationUpdateRequests.push(activityIdentificationUpdates.requestCode);
    $('createActivityIdentificationUpdatesResult').innerHTML = JSON.stringify(activityIdentificationUpdates, null, 1);
};

$('registerActivityIdentificationUpdates').onclick = async () => {
    registerHMSEvent(HMSActivityIdentification.Events.ACTIVITY_IDENTIFICATION_RESULT, (result) => {
        console.log('new activity identification');
        $('activityIdentificationUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    });
};

$('registerActivityConversionUpdates').onclick = async () => {
    registerHMSEvent(HMSActivityIdentification.Events.ACTIVITY_CONVERSION_RESULT, (result) => {
        console.log('new activity conversion');
        $('activityConversionUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    });
};

$('deleteActivityIdentificationUpdates').onclick = async () => {
    console.log('Deleting activity identification updates...');
    activityIdentificationUpdateRequests.forEach(async requestCode => {
        const result = await HMSActivityIdentification.deleteActivityIdentificationUpdates(requestCode);
        console.log({
            requestCode,
            result
        });
    });
    activityIdentificationUpdateRequests.length = 0; // clear the array
};

$('deleteActivityConversionUpdates').onclick = async () => {
    console.log('Deleting activity conversion updates...');
    activityConversionUpdateRequests.forEach(async requestCode => {
        const result = await HMSActivityIdentification.deleteActivityConversionUpdates(requestCode);
        console.log({
            requestCode,
            result
        });
    });
    activityConversionUpdateRequests.length = 0; // clear the array
};
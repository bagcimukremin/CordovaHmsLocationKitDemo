cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-hms-location.utils",
      "file": "plugins/cordova-plugin-hms-location/www/utils.js",
      "pluginId": "cordova-plugin-hms-location"
    },
    {
      "id": "cordova-plugin-hms-location.HMSLocationKit",
      "file": "plugins/cordova-plugin-hms-location/www/HMSLocationKit.js",
      "pluginId": "cordova-plugin-hms-location",
      "clobbers": [
        "HMSLocationKit"
      ]
    },
    {
      "id": "cordova-plugin-hms-location.HMSFusedLocation",
      "file": "plugins/cordova-plugin-hms-location/www/HMSFusedLocation.js",
      "pluginId": "cordova-plugin-hms-location",
      "clobbers": [
        "HMSFusedLocation"
      ]
    },
    {
      "id": "cordova-plugin-hms-location.HMSActivityIdentification",
      "file": "plugins/cordova-plugin-hms-location/www/HMSActivityIdentification.js",
      "pluginId": "cordova-plugin-hms-location",
      "clobbers": [
        "HMSActivityIdentification"
      ]
    },
    {
      "id": "cordova-plugin-hms-location.HMSGeofence",
      "file": "plugins/cordova-plugin-hms-location/www/HMSGeofence.js",
      "pluginId": "cordova-plugin-hms-location",
      "clobbers": [
        "HMSGeofence"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-hms-location": "1.0.0"
  };
});
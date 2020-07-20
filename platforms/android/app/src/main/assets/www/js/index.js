/*
 * HMS Location Kit Cordova Startup Project - index.js 
 */
const $ = (_id) => document.getElementById(_id);

$('fusedLocation').onclick = () => {
    goPage("/fusedLocation.html");
}
$('activityIdentification').onclick = () => {
    goPage("/activityIdentification.html");
}
$('geofences').onclick = () => {
    goPage("/geofences.html");
}

function goPage(pageName) {
    let dirPath = location.href.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
    fullPath = dirPath + pageName;
    window.location = fullPath;
}

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        // HMSLocationKit initialize
        HMSLocationKit.init();
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
app.initialize();
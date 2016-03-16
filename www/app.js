angular.module('IotDemo', [])
  .controller('MainCtrl', function ($scope, $rootScope, IotDataStore) {
    var IotCtrl = this;
        IotCtrl.name = "Demo App";
        $rootScope.$on('SensorData', function (e, data) {
            console.log("============= sensor data is : ", data);
        });
        $rootScope.$on('AlertData', function (e, data) {
            console.log("============= alert data is : ", data);
        });

        function init() {
            var success = function (res) {
                IotCtrl.login = res;
                console.log('login data is: ', res);
                getAllPhotos();
            };
            var error = function (err) {
                console.error('error while logging in: ', err);
            };
            IotDataStore.login().then(success, error);
        }
        init();

        function getAllPhotos() {
            var success = function (res) {
                console.log('inside sucdess of getAllPhotos : ', res);
                IotCtrl.photos = (res && res.photos) || [];
            };
            var error = function (err) {
                console.error('error while fetching allPhotos : ', err);
            };
            IotDataStore.getAllPhotos(IotCtrl.login.value).then(success, error);
        }

        IotCtrl.clickPhoto = function () {
            var success = function (res) {
                console.log('inside success of click photo : ', res);
            };
            var error = function (err) {
                console.error('error while clicking a photo : ', err);
            };
            IotDataStore.clickPhoto(IotCtrl.login.value).then(success, error);
        };

        IotCtrl.startToy = function () {
            var success = function (res) {
                console.log('inside success of toy start : ', res);
            };
            var error = function (err) {
                console.error('error while starting the toy : ', err);
            };
            IotDataStore.startToy(IotCtrl.login.value).then(success, error);
        };

        IotCtrl.stopToy = function () {
            var success = function (res) {
                console.log('inside success of toy stop : ', res);
            };
            var error = function (err) {
                console.error('error while stopping the toy : ', err);
            };
            IotDataStore.stopToy(IotCtrl.login.value).then(success, error);
        };

        IotCtrl.deleteEmergencyContactDetails = function (contactId) {
            var success = function (res) {
                console.log('inside success of delete emergency contact details : ', res);
            };
            var error = function (err) {
                console.error('error while deleting contact details : ', err);
            };
            IotDataStore.deleteEmergencyContactDetails(IotCtrl.login.value, contactId).then(success, error);
        };

        IotCtrl.getEmergencyContactDetails = function (contactId) {
            var success = function (res) {
                console.log('inside success of get emergency contact details : ', res);
            };
            var error = function (err) {
                console.error('error while getting contact details : ', err);
            };
            IotDataStore.getEmergencyContactDetails(IotCtrl.login.value, contactId).then(success, error);
        };
  });
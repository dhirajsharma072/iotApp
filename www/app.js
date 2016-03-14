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
            var success = function (response) {
                IotCtrl.login = response;
                console.log('login data is: ', response);
            };
            var error = function (err) {
                console.error('error while logging in: ', err);
            };
            IotDataStore.login().then(success, error);
        }
        init();
  });

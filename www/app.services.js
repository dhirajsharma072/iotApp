angular.module('IotDemo')
    .factory("IotDataStore", ['$http', '$q', function ($http, $q) {
        return {
            login : function () {
                var deferred = $q.defer();
                $http.get('http://smart-bed.qa6.tothenew.net/SmartBed/oauth/token?grant_type=password&client_id=myuser&client_secret=secret&username=ankit.arora@tothenew.com&password=igdefault')
                    .success(function (response) {
                       return deferred.resolve(response);
                    })
                    .error(function (err) {
                      return  deferred.reject(err);
                    });
               return deferred.promise;
            },
            getEmergencyContactDetails : function () {

            },
            updateEmergencyContactDetails : function () {

            },
            deleteEmergencyContactDetails : function () {

            },
            getSensorData : function () {

            },
            getAllPhotos : function (token) {
                var deferred = $q.defer();
                $http.get('http://smart-bed.qa6.tothenew.net/SmartBed/photo/getAllPhotos', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .success(function (response) {
                        return deferred.resolve(response);
                    })
                    .error(function (err) {
                        return  deferred.reject(err);
                    });
                return deferred.promise;
            },
            clickPhoto: function (token) {
                var deferred = $q.defer();
                $http.get('http://smart-bed.qa6.tothenew.net/SmartBed/photo/clickPhoto', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .success(function (response) {
                        return deferred.resolve(response);
                    })
                    .error(function (err) {
                        return  deferred.reject(err);
                    });
                return deferred.promise;
            },
            startToy: function (token) {
                var deferred = $q.defer();
                $http.get('http://smart-bed.qa6.tothenew.net/SmartBed/toy?flag=true', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .success(function (response) {
                        return deferred.resolve(response);
                    })
                    .error(function (err) {
                        return  deferred.reject(err);
                    });
                return deferred.promise;
            },
            stopToy: function (token) {
                var deferred = $q.defer();
                $http.get('http://smart-bed.qa6.tothenew.net/SmartBed/toy?flag=false', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .success(function (response) {
                        return deferred.resolve(response);
                    })
                    .error(function (err) {
                        return  deferred.reject(err);
                    });
                return deferred.promise;
            }
        }
    }]);
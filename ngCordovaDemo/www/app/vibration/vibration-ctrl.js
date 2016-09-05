(function () {
    'use strict';

    angular.module('ngApp').controller('VibrationCtrl', ['$cordovaVibration', VibrationCtrl]);

    function VibrationCtrl($cordovaVibration) {
        var vm = this;

        vm.vibrate = function () {
            $cordovaVibration.vibrate(500);
        };
    };
})();
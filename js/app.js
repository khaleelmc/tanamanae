(function(){
    'use strict';

    angular.module('BillsApp', ['ngMaterial']).controller('BillsAppController', function($scope) {
        $scope.currentNavItem = 'Bill Buffer';
    })
    .controller('BillBufferFormCtrl', function($scope) {
        $scope.powerBuffer = 0.00;
        $scope.rentBuffer = 0.00;
        $scope.rentTotal = 0.00;

        $scope.labels = {
            rent: 'Rent / Mortgage',
            isp: 'Internet / Cable',
            power: 'Power (Electricity)',
            phone: 'Phone',
            water: 'Water'
        };

        $scope.user = {
            rent: '',
            isp: '',
            power: '',
            phone: '',
            water: ''
        };

        $scope.total = {
            rent: 0.00,
            isp: 0.00,
            power: 0.00,
            phone: 0.00,
            water: 0.00
        }

        $scope.buffer = {
            rent: 0.00,
            isp: 0.00,
            power: 0.00,
            phone: 0.00,
            water: 0.00
        }

        $scope.subheadClass  = "md-body-1";
        $scope.titleClass    = "md-subhead";

        $scope.displayRent = function() {
            $scope.buffer['rent'] = calculateBuffer($scope.user['rent'], 'rent');
            $scope.total['rent'] = $scope.user['rent'] + $scope.buffer['rent'];
        }

        $scope.displayISP = function() {
            $scope.buffer['isp'] = calculateBuffer($scope.user['isp'], 'isp');
            $scope.total['isp'] = $scope.user['isp'] + $scope.buffer['isp'];
        }

        $scope.displayPower = function() {
            $scope.buffer['power'] = calculateBuffer($scope.user['power'], 'power');
            $scope.total['power'] = $scope.user['power'] + $scope.buffer['power'];
        }

        $scope.displayPhone = function() {
            $scope.buffer['phone'] = calculateBuffer($scope.user['phone'], 'phone');
            $scope.total['phone'] = $scope.user['phone'] + $scope.buffer['phone'];
        }

        $scope.displayWater = function() {
            $scope.buffer['water'] = calculateBuffer($scope.user['water'], 'water');
            $scope.total['water'] = $scope.user['water'] + $scope.buffer['water'];
        }

        // TODO: Deprecate this bitch!
        function calculateRentBuffer(num) {
            return  (Math.ceil(parseInt(num) / 5000) * 5000) - num;
        }

        // The future!
        function calculateBuffer(num, category) {
            // ensures "NaN" isn't displayed for non-numerical inputs
            if (isNaN(num) || num == '' || num == null) {
                return 0;
            }
            switch (category) {
                case 'rent':
                    return  (Math.ceil(parseInt(num) / 5000) * 5000) - num;
                    break;
                case 'isp':
                    return  (Math.ceil(parseInt(num) / 5000) * 5000) - num;
                    break;
                case 'power':
                    return  (Math.ceil(parseInt(num) / 1000) * 1000) - num;
                    break;
                case 'phone':
                    return  (Math.ceil(parseInt(num) / 1000) * 1000) - num;
                    break;
                case 'water':
                    return  (Math.ceil(parseInt(num) / 500) * 500) - num;
                    break;
                default:
                    return 0;
            }
        }

    });
})();

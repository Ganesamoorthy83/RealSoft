angular.module("myApp", [])
        .controller('myController', ['$scope', function ($scope) {

            // CREATE AN 'customers' OBJECT, WITH AN ARRAY OF DATA.
            $scope.customers = {
                "001": { 'name': 'PUSHBHA PANDIYAN STORE', 'address': 'HOSUR', 'contactNo': 9500880006 },
                "002": { 'name': 'AGS MALL', 'address': 'TIRUPPATHUR', 'contactNo': 9489890386 },
                "003": { 'name': 'BARATHI MALL', 'address': 'SALEM', 'contactNo': 9842727450 },
                "004": { 'name': 'JOTHI DEPT', 'address': 'HOSUR', 'contactNo': 9003555088 },
                "005": { 'name': 'AADHI ORGANICS', 'address': 'HOSUR', 'contactNo': 9487789219 }
            }

            $scope.cusArray = Object.keys($scope.customers)
                .map(function (value, index) {
                    return { id: value, values: $scope.customers[value] }
                }
            );
        } ]);
angular.module('app.controllers', [])
  
.controller('percentageCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.data = {
        num1: '',
        num2: '',
        result: '',
        calculate: function(){
            this.result = (this.num1 * 100) / this.num2;
        }
    }

}])
 
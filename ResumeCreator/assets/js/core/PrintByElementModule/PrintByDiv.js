var printModule = angular.module("PrintModule", []);
printModule.directive("printbydiv", function () {
    return {
        restrict: 'E',
        scope: {
            id: "=",
            show: "="
        },
        template: '<iframe name="print_frame" width="0" height="0" frameborder="0" src="about:blank"></iframe>',
        controller: function ($scope) {

            $scope.printDiv = function (divId) {
                
                window.frames["print_frame"].document.body.innerHTML = document.getElementById(divId).innerHTML;
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            }

            var watcher = $scope.$watch(function () {
                return $scope.show;
            }, function (newVal, oldVal) {
                if (newVal) {
                    $scope.printDiv($scope.id);
                    $scope.show = false;
                }
            });

            var deRegisterWatcher = function () {
                watcher();
            };

            $scope.$on('$destroy', function () {
                deRegisterWatcher();
            });
        }
    }
});
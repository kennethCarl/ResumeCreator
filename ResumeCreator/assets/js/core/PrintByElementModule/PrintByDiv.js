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
                window.frames["print_frame"].document.head.innerHTML = '<style>ul{margin-bottom: 0px;}.left-label-preview{width: 16%; font-weight:bold; display:inline-block; }.right-label-preview {width: 84%;display: inline-block;}.right-label-preview-beside-image {width: 64%;display: inline-block;}.left-label-preview-medium{width: 18%;font-weight:bold;display:inline-block;margin-left: 2%;}.right-label-preview-medium{width: 80%;display:inline-block;}.line{min-width: 100%;text-align: justify;}.line-label-document{font-size: 120%; font-weight: bold;}.line-label-medium-document{font-size: 100%;font-weight: bold;margin-left: 10px;}.line-label-document1{font-size: 110%; font-weight: bold;}.line-label-medium-document1{font-size: 95%;font-weight: bold;margin-left: 10px;}.line-label-document2{font-size: 105%; font-weight: bold;}.line-label-medium-document2{font-size: 90%;font-weight: bold;margin-left: 10px;}.line-center{min-width: 100%;text-align: center;}</style>';
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
var arjocamahamageApp = angular.module('arjocamahamageResumeCreatorApp', ['ui.router', 'LocalForageModule', 'PrintModule']);
arjocamahamageApp.controller("DocumentPreviewController", function ($rootScope, $scope, $interval) {
    $scope.hide = function () {
        document.getElementById("c-preview").className = "content-preview hide-preview";
        document.getElementById("c-modal-content").className = "content-container hide-content-container";
        document.getElementById("c-modal-container").className = "modal-container hide-modal-container";
    };
})
arjocamahamageApp.run(function ($state, $rootScope) {
    $state.go('home');

    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        console.log('Started');
    })

    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        console.log('Success');
        document.getElementsByTagName("body")[0].scrollTop = 0;
    })
});

arjocamahamageApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home',
    {
        url: '/home',
        templateUrl: "Home/Resume",
        controller: "HomeController"
    })

    .state('ongoing',
    {
        url: '/ongoing',
        templateUrl: "Home/Ongoing"
    })
});
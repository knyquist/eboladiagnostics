angular.module('starter.controllers', ['ionic'])

.controller('CommonCtrl', function($scope) {
})

.controller('ScenariosCtrl', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $scope, $state) {
    	console.log('hello');
    	$scope.goTo = function () {
    		console.log('world');
    		//$state.transitionTo("#/tab/scenarios/collect_sample");
    	};
    }
])

.controller('CollectSampleCtrl', ['$anchorScroll', '$location', '$scope', 
    function ($anchorScroll, $scope, $state) {
    }
])

.controller('ContactCtrl', function($scope) {
});

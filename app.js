(function() {
var app = angular.module('githubViewer', []);

var MainCtrl = function($scope, $http) {
    $scope.message = "hello from angular!";
};

app.controller('MainCtrl', MainCtrl);
}());
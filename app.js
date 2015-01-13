(function() {
var app = angular.module('githubViewer', []);

var MainCtrl = function($scope, $http, $interval) {

    var onUserSuccess = function(response) {
        $scope.user = response.data;

        $http.get($scope.user.repos_url)
            .then(onRepoSuccess, onError)
    };

    var onRepoSuccess = function(response) {
        $scope.repos = response.data;
        $scope.username = '';
    };

    var onError = function(reason) {
        $scope.error = "There was an error";
    };

    var decrementCountdown = function() {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    };

    var startCountDown = function() {
        $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
            .then(onUserSuccess, onError)
    };

    $scope.countdown = 5;
    $scope.username = "mpedersen2054";
    $scope.message = "hello from angular!";
    startCountDown();
};

app.controller('MainCtrl', MainCtrl);
}());
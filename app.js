(function() {
var app = angular.module('githubViewer', []);

var MainCtrl = function($scope, $http) {

    var onUserSuccess = function(response) {
        $scope.user = response.data;

        $http.get($scope.user.repos_url)
            .then(onRepoSuccess, onError)
    };

    var onRepoSuccess = function(response) {
        $scope.repos = response.data;
        $scope.username = '';
    }

    var onError = function(reason) {
        $scope.error = "There was an error";
    };

    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
            .then(onUserSuccess, onError)
    };

    $scope.username = "mpedersen2054";
    $scope.message = "hello from angular!";
};

app.controller('MainCtrl', MainCtrl);
}());
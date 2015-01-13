(function() {
var app = angular.module('githubViewer', []);

var MainCtrl = function($scope, $http) {

    var onUser = function(response) {
        $scope.user = response.data;
    };

    var onError = function(reason) {
        $scope.error = "There was an error";
    };

    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
            .then(onUser, onError)
    };

    $scope.username = "mpedersen2054";
    $scope.message = "hello from angular!";
};

app.controller('MainCtrl', MainCtrl);
}());
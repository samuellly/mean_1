app.controller('loginController', function($scope, wallFactory) {
    $scope.user = {};
    $scope.errors = [];
    $scope.curUser = null;

    wallFactory.checkUser();

    $scope.logout = function() {
        wallFactory.logout(function(user) {
            $scope.curUser = user;
        });
    };

    wallFactory.getUser(function(user) {
        $scope.curUser = user.username;
    });

    $scope.loginUser = function() {
        $scope.errors = [];
        if (!$scope.user.username) {
            $scope.errors.push('Please enter a username!');
        } else if ($scope.user.username.length < 3) {
            $scope.errors.push('Username is too short!');
        } else {
            wallFactory.login($scope.user);
        }
    };

});

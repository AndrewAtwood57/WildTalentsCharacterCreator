app.controller('RegisterController', function ($scope, $location, $rootScope, FlashService, $http) {
    $scope.register = function () {
        $scope.dataLoading = true;

        $scope.CreateUser = function (user) {

        };
        UserService.Create(user)
            .then(function (response) {
                if (response.success) {
                    FlashService.Success('Registration successful', true);
                    $location.path('/login');
                } else {
                    FlashService.Error(response.message);
                    dataLoading = false;
                }
            });
    };



});
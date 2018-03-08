angular.module('WTCharacterCreator').factory('DataService', function ($http) {

    return {
        GetCharacter: function (name) {
            return $http.get("Characters/GetCharacter/" + name).then(handleSuccess, handleError('Error getting character'));
        }
    }

    // private functions

    function handleSuccess(response) {
        return response.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

});
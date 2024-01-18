angular.module("listings").component("listings", {
  templateUrl: "listings/listings.template.html",
  controller: [
    "$http", '$location',
    function propertiesController($http, $location) {

      var self = this;
      self.listings = [];
      var config = {
        url: "https://sandbox.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A",
        method: "GET",
        headers: {
          "REPLIERS-API-KEY": "VMEs2eM1aBgCrM8tR9rG54Ve8hyRqo",
          "Content-Type": "application/json",
        },
      };

      window.onload = function () {
        $http(config).then(
          function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            self.listings = response.data.listings;
          },
          function errorCallback(response) {
            // called asynchronously if an error occurs
          }
        );
      };
      self.showDetails = function (index) {
        console.log(index);
        $location.path('/listing/' + index);
      };
    },
  ],
});

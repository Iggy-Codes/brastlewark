/* eslint no-undef: "off" */
(function () {
  angular
    .module('brastlewark')
    .factory('ApiFactory', ApiFactory)

  function ApiFactory ($http, cfg) {
    function getPeople () {
      return $http.get(cfg.url)
        .then((response) => response.data.Brastlewark)
    }
    return {
      getPeople
    }
  }
})()

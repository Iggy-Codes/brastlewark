/* eslint no-undef: "off" */
(function () {
  angular
  .module('brastlewark')
  .config([
    '$routeProvider',
    routerConfig
  ])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/template/people.tpl.html',
        controller: 'PeopleController',
        controllerAs: 'vm'
      })
      .otherwise('/')
  }
})()

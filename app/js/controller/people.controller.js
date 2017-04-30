/* eslint no-undef: "off" */
(function () {
  angular.module('brastlewark')
    .controller('PeopleController', PeopleController)

  function PeopleController () {
    var vm = this
    vm.title = 'People from Brastlewark'
  }
})()

/* eslint no-undef: "off" */
(function () {
  angular.module('brastlewark')
    .controller('PeopleController', PeopleController)

  function PeopleController (ApiFactory) {
    let vm = this

    vm.title = 'People from Brastlewark'

    ApiFactory.getPeople()
      .then((response) => {
        people = response
      })
  }
})()

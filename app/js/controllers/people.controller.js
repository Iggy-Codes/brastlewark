/* eslint no-undef: "off" */
(function () {
  angular.module('brastlewark')
    .controller('PeopleController', PeopleController)

  function PeopleController (ApiFactory, cfg) {
    let vm = this

    vm.title = 'People from Brastlewark'
    vm.itemsPage = cfg.itemsPage
    vm.actualPage = 1

    ApiFactory.getPeople()
      .then((response) => {
        vm.people = response
        vm.peoplePage = vm.people.slice((vm.actualPage - 1) * vm.itemsPage, vm.actualPage * vm.itemsPage)
        vm.totalPages = parseInt(response.length / vm.itemsPage) + ((response.length % vm.itemsPage) ? 1 : 0)
      })

    vm.changePage = (e, pageNumber) => {
      e.preventDefault()
      console.log(pageNumber)
    }
  }
})()

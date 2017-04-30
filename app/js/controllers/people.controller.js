/* eslint no-undef: "off" */
(function () {
  angular.module('brastlewark')
    .controller('PeopleController', PeopleController)

  function PeopleController (ApiFactory, cfg) {
    let vm = this

    vm.title = 'People from Brastlewark'
    vm.itemsPage = cfg.itemsPage
    vm.viewDetails = false
    // vm.actualPage = 67

    ApiFactory.getPeople()
      .then((response) => {
        vm.totalPages = response.totalPages
        vm.people = response.people
        vm.newData = ApiFactory.dataPage(vm.people, cfg.pageToShow, vm.totalPages)
        console.log(vm.newData.peoplePage)
      })

    vm.changePage = (e, pageNumber) => {
      e.preventDefault()
      vm.newData = ApiFactory.dataPage(vm.people, pageNumber, vm.totalPages)
    }

    vm.detailsById = (e, personId) => {
      e.preventDefault()
      vm.person = vm.people.find((element) => element.id === personId)
      console.log(vm.person)
    }
  }
})()

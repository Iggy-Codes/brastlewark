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
        vm.success = response.success
        vm.people = response.people
        console.log(response.people)
        if (vm.people.length > 0) {
          vm.totalPages = response.totalPages
          vm.imgs = response.imgs
          vm.newData = ApiFactory.dataPage(vm.people, cfg.pageToShow, vm.totalPages)
        } else {
          vm.explanation = response.explanation
        }
      })

    vm.changePage = (e, pageNumber) => {
      e.preventDefault()
      vm.newData = ApiFactory.dataPage(vm.people, pageNumber, vm.totalPages)
    }

    vm.detailsById = (e, personId) => {
      e.preventDefault()
      vm.person = vm.people.find((element) => element.id === personId)
      vm.viewDetails = true
    }

    vm.hideModal = (e) => {
      e.preventDefault()
      vm.viewDetails = false
    }

    vm.sortPeople = () => {
      console.log(vm.orderBy)
      if (vm.orderBy === 'age') vm.people.sort((a, b) => a.age - b.age)
      if (vm.orderBy === 'name') {
        vm.people.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
      }
      vm.newData = ApiFactory.dataPage(vm.people, cfg.pageToShow, vm.totalPages)
    }
  }
})()

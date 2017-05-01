/* eslint no-undef: "off" */
(function () {
  angular
    .module('brastlewark')
    .factory('ApiFactory', ApiFactory)

  function ApiFactory ($http, cfg) {
    function getPeople () {
      return $http.get(cfg.url)
        .then((response) => {
          let totalPages = parseInt(response.data.Brastlewark.length / cfg.itemsPage) + ((response.data.Brastlewark.length % cfg.itemsPage) ? 1 : 0)
          let people = response.data.Brastlewark
          let success = true
          return {totalPages, people, success}
        })
        .then((response) => {
          console.log(response.people)
          let imageToCache = []
          response.people.forEach((element) => {
            if (!imageToCache.includes(element.thumbnail)) {
              imageToCache.push(element.thumbnail)
            }
          })
          console.log(imageToCache)
          response.imgs = imageToCache
          return response
        })
        .catch((error) => {
          console.log(error)
          let success = false
          let explanation = `Server respond with ${error.data}`
          return {success, explanation}
        })
    }

    function dataPage (people, actualPage, totalPages) {
      actualPage = (isNaN(actualPage) || actualPage < 1) ? 1 : parseInt(actualPage)
      actualPage = (actualPage > totalPages) ? totalPages : actualPage
      let peoplePage = people.slice((actualPage - 1) * cfg.itemsPage, actualPage * cfg.itemsPage)
      let firstItem = parseInt(actualPage - cfg.linkPagesToShow / 2)
      if (firstItem < 1) firstItem = 1
      if (firstItem + cfg.linkPagesToShow + 1 > totalPages) firstItem = totalPages - cfg.linkPagesToShow + 1
      let arrayPage = []
      for (let i = 0; i < cfg.linkPagesToShow; i++) {
        let page = i + firstItem
        if (page === actualPage) arrayPage.push([page, false])
        else arrayPage.push([page, true])
      }
      let previousPage = (actualPage === 1)
      let nextPage = (actualPage === totalPages)
      return {
        peoplePage,
        previousPage,
        arrayPage,
        nextPage,
        actualPage
      }
    }
    return {
      getPeople,
      dataPage
    }
  }
})()

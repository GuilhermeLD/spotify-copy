const resultArtist = document.getElementById('result-artist')
const searchInput = document.getElementById('search-input')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
      .then((response) => response.json())
      .then((results) => displayResults(results))
}

function displayResults(results) {
  resultPlaylist.classList.add('hidden')
  const artirtsName = document.getElementById('artist-name')
  const artirtsImage = document.getElementById('artist-img')

  results.forEach(element => {
    artirtsName.innerText = element.name;
    artirtsImage.src = element.urlImg
  })

  resultArtist.classList.remove('hidden')
}


document.addEventListener('input', function() {
  const  searchTerm = searchInput.value.toLowerCase();
    if (searchInput === '') {
      resultPlaylist.classList.add('hidden')
      resultArtist.classList.remove('hidden')
      return;
    }else {
      resultPlaylist.classList.add('hidden')
    }

    requestApi(searchTerm)
})
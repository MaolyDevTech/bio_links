let html = document.querySelector('html')
let checkbox = document.querySelector('#dark')
let spotify = document.querySelector('#spotify')

checkbox.addEventListener('change', ()=>{
  html.classList.add('dark-mode')
    if(checkbox.checked){
    let srcDark = spotify.getAttribute('src').replace('light', 'dark')
    spotify.setAttribute('src', srcDark)
  } else {
    let srcLight = spotify.getAttribute('src').replace('dark', 'light')
    spotify.setAttribute('src', srcLight)
  }
})
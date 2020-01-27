function loaderFunction() {
  myVar = setTimeout(showLoader, 1000)
}

function showLoader() {
  document.getElementById('loader').style.display = 'none'
  document.body.style.overflow = 'visible'
}

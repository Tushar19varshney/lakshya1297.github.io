window.addEventListener(
  'scroll',
  function() {
    let doc = document.getElementById('navbar')
    let scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
    if (scrollTop >= 1) {
      doc.classList.add('box-shadow')
    } else {
      doc.classList.remove('box-shadow')
    }
  },
  true
)

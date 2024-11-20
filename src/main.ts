document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()

    const href = link.getAttribute('href')

    document.querySelectorAll('.item').forEach((block) => {
      block.classList.remove('show')
    })

    if (document.querySelector(href)) {
      document.querySelector(href).classList.add('show')
    }
  })
})

setTimeout(() => {
  // document.startViewTransition(() => {
  const wrap = document.querySelector('.popup__wrap') as HTMLElement
  wrap.style.opacity = '0'
  document.querySelector('.popup')?.classList.add('loaded')
  setTimeout(() => {
    wrap.style.opacity = ''
  }, 1000)
  // })
}, 2000)

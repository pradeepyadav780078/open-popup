const openPopup = document.querySelector('.open-popup')
const Popup = document.querySelector('.popup')
const closeIcon = document.querySelector('.close-icon')
const allClose = document.querySelector('.all-close')


openPopup.addEventListener('click', ()=>{
    Popup.classList.add('Popup')
    
})
closeIcon.addEventListener('click',()=>{
    Popup.classList.remove('Popup')
  })
  allClose.addEventListener('click', ()=>{
    Popup.classList.remove('Popup')
  })
const burgerMenu = document.querySelector('.navbar-links__menu')
const navbarUl = document.querySelector('.navbar-links_ul')
let clickCheck = 1;
const body = document.querySelector('.body')
const navButton = document.querySelector('.navbar-links_ul__li---sandbox')
const button = document.querySelectorAll('button')
const s7img1 = document.querySelector('.section7-cards--card1')

const s7img2 = document.querySelector('.section7-cards--card2')
const s7img3 = document.querySelector('.section7-cards--card3')
const s7img4 = document.querySelector('.section7-cards--card4')




button.forEach(function (element, item) {
  element.addEventListener('click', function () {
    element.style.cursor = 'wait'
    setTimeout(function () {
      element.style.cursor = 'pointer'
    }, 1000);
  })
})

burgerMenu.addEventListener('click', function(){
  if(clickCheck == 1){
    navbarUl.style.display = 'flex'
    clickCheck = 0;
    body.style.overflow ='hidden'
  }else{
    navbarUl.style.display = 'none'
    clickCheck = 1
    body.style.overflow ='visible'
  }
})
navButton.addEventListener('click', function () {
  navButton.style.background = '#999999'
  navButton.style.color = 'black'
})


s7img1.addEventListener('mouseover', function(){
  s7img2.style.top = '170px'
  s7img1.style.top = '120px'
  s7img3.style.top = '188px'
  s7img4.style.top = '202px'
})
s7img1.addEventListener('mouseout', function(){
  s7img1.style.top = '150px'
  s7img1.style.top = '150px'
  s7img2.style.top = '150px'
  s7img3.style.top = '150px'
  s7img4.style.top = '150px'
})

s7img2.addEventListener('mouseover', function(){
  s7img1.style.top = '170px'
  s7img2.style.top = '120px'
  s7img3.style.top = '188px'
  s7img4.style.top = '202px'
  
})
s7img2.addEventListener('mouseout', function(){
  s7img1.style.top = '150px'
  s7img1.style.top = '150px'
  s7img2.style.top = '150px'
  s7img3.style.top = '150px'
  s7img4.style.top = '150px'
})

s7img3.addEventListener('mouseover', function(){
  s7img2.style.top = '170px'
  s7img3.style.top = '120px'
  s7img1.style.top = '188px'
  s7img4.style.top = '202px'
})
s7img3.addEventListener('mouseout', function(){
  s7img1.style.top = '150px'
  s7img1.style.top = '150px'
  s7img2.style.top = '150px'
  s7img3.style.top = '150px'
  s7img4.style.top = '150px'
})

s7img4.addEventListener('mouseover', function(){
  s7img2.style.top = '170px'
  s7img4.style.top = '120px'
  s7img1.style.top = '188px'
  s7img3.style.top = '202px'
})
s7img4.addEventListener('mouseout', function(){
  s7img1.style.top = '150px'
  s7img1.style.top = '150px'
  s7img2.style.top = '150px'
  s7img3.style.top = '150px'
  s7img4.style.top = '150px'
})
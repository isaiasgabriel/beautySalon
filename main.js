//DOM -> document object model

/*======== ABRE E FECHA O MENU ==========*/
const nav = document.querySelector('#header nav')
//Ao jogar isso no console mostra o #header nav selecionado
const toggle = document.querySelectorAll('nav .toggle') //Selecionar o toggle
//Funcao pra fazer a troca de tela principal e menu
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*======== FECHA O MENU QND CLICA NO LINK ==========*/

const links = document.querySelectorAll('nav ul li a')
//e como se const links estivesse armazenando todos os elementos da lista
for (const link of links) {
  link.addEventListener('click', function () {
    //pra cada link da lista adicionamos um evento de click que ira executar a funcao
    nav.classList.remove('show')
    //entramos na classList do nosso nav e fazemos a remocao do 'show' ao clicar
  })
}

/*Adicionar sombra ao header quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*======== TESTIMONIALS SLIDER SWIPER ==========*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767 : {
      slidesPerView:2,
      setWrapperSize: true
    }
  }
})

/*======== Scroll Reveal ==========*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*======== back-to-top ==========*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {

  if (window.scrollY >= 560) {
    //scroll maior que 560
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*======== Menu ativo conforme a secao da pagina (desktop)  ==========*/
/*Primeiro passo = pegar todas as sections e jogar em uma const*/

const sections = document.querySelectorAll('main section[id]')
/*estamos pegando todas as sections que possuem id*/ 

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*======== when scroll  ==========*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection( )
})



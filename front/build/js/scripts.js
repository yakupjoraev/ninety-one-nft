// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger, .aside__burger')
  const menu = document.querySelector('.menu, .aside__inner')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item, .aside__nav-item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })

}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function profileMob() {
  const container = document.querySelector('.profile');

  if (!container) {
    return null
  }

  const profile = document.querySelector('[data-profile-mob]');
  const profileContent = document.querySelector('[data-profile-mob-content]');
  const profileClose = document.querySelector('[data-profile-mob-close]');

  profile.addEventListener('click', () => {
    profileContent.classList.add('active');
  })

  profileClose.addEventListener('click', () => {
    profileContent.classList.remove('active');
  })

  document.addEventListener('click', (event) => {
    if (!container.contains(event.target)) {
      profileContent.classList.remove('active');
    }
  });
}

profileMob();

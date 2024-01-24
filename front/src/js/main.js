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
  const body = document.querySelector('body')

  profile.addEventListener('click', () => {
    profileContent.classList.add('active');
    body.classList.add('locked')
  })

  profileClose.addEventListener('click', () => {
    profileContent.classList.remove('active');
    body.classList.remove('locked')
  })

  document.addEventListener('click', (event) => {
    if (!container.contains(event.target)) {
      profileContent.classList.remove('active');
      body.classList.remove('locked')
    }
  });
}

profileMob();

function modals() {
  const container = document.querySelector('.modal');

  if (!container) {
    return null
  }

  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const modals = document.querySelectorAll('.modal');
  const body = document.querySelector('body')

  // Функция для закрытия всех модальных окон
  function closeAllModals() {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalId;
      const modal = document.getElementById(modalId);

      // Закрыть все открытые модальные окна
      closeAllModals();

      modal.classList.add('show');
      body.classList.add('locked');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('show');
      body.classList.remove('locked');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
      body.classList.remove('locked');
    }
  });
}

modals();
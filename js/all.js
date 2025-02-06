


/////////////////////сайдбар
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const header = dropdown.querySelector('.dropdown-header');
      const content = dropdown.querySelector('.dropdown-content');
      const arrow = header ? header.querySelector('.arrow') : null;

      if (!header || !content) return;

      header.addEventListener('click', () => {
          // Закрываем все открытые dropdowns
          dropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                  const otherHeader = otherDropdown.querySelector('.dropdown-header');
                  const otherContent = otherDropdown.querySelector('.dropdown-content');
                  const otherArrow = otherHeader ? otherHeader.querySelector('.arrow') : null;

                  if (otherHeader && otherContent) {
                      otherHeader.classList.remove('active');
                      otherContent.style.display = 'none';

                      if (otherArrow) {
                          otherArrow.classList.remove('up');
                          otherArrow.classList.add('down');
                      }
                  }
              }
          });

          // Открываем/закрываем текущий dropdown
          header.classList.toggle('active');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';

          if (arrow) {
              if (header.classList.contains('active')) {
                  arrow.classList.remove('down');
                  arrow.classList.add('up');
              } else {
                  arrow.classList.remove('up');
                  arrow.classList.add('down');
              }
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const button = document.querySelector('.dropdown-button');
  const menu = document.querySelector('.dropdown-menu');

  // Проверяем, существуют ли элементы в DOM
  if (!dropdown || !button || !menu) return;

  const selectedText = button.querySelector('span');
  
  button.addEventListener('click', function () {
    dropdown.classList.toggle('open');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      selectedText.textContent = e.target.textContent;
      dropdown.classList.remove('open');
    }
  });

  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

const closeElements = document.querySelectorAll('.close');
if (closeElements.length > 0) {
  closeElements.forEach(image => {
    image.addEventListener('click', () => {
      const closestElement = image.closest('.closeable');
      if (closestElement) {
        closestElement.style.display = 'none';
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".border").forEach(element => {
    element.addEventListener("click", () => {
      element.classList.toggle("active-border");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar-tags").forEach(navbarTags => {
    const moreButton = navbarTags.nextElementSibling?.querySelector("p");
    const moreIcon = navbarTags.nextElementSibling?.querySelector("img");
    const borderItems = navbarTags.querySelectorAll(".border");

    if (!moreButton || !moreIcon || borderItems.length === 0) return;

    // Скрываем все элементы, кроме первых 6
    borderItems.forEach((item, index) => {
      if (index >= 6) {
        item.style.display = "none";
      }
    });

    navbarTags.nextElementSibling.addEventListener("click", () => {
      const isExpanded = navbarTags.classList.toggle("expanded");

      if (isExpanded) {
        borderItems.forEach(item => (item.style.display = "block")); // Показываем все элементы
        moreButton.textContent = "Show less";
        moreIcon.style.transform = "rotate(180deg)";
      } else {
        borderItems.forEach((item, index) => {
          if (index >= 6) item.style.display = "none"; // Снова скрываем элементы
        });
        moreButton.textContent = "Show more";
        moreIcon.style.transform = "rotate(0deg)";
      }
    });
  });
});


/////////////////////слфйдер
const swiperContainer = document.querySelector('.swiper-container-game');

if (swiperContainer) {
  const swiper = new Swiper('.swiper-container-game', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next', 
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-plag', 
      clickable: true,
    },
    breakpoints: {
      870: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      622: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });
}


const swiperContainer2 = document.querySelector('.swiper-container-game2');

if (swiperContainer2) {
  const swiper = new Swiper('.swiper-container-game2', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next', 
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-plag', 
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      
    }
  });
}

const swiperContainer3 = document.querySelector('.swiper-container-game-3');

if (swiperContainer3) {
  const swiper = new Swiper('.swiper-container-game-3', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next', 
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-plag', 
      clickable: true,
    },
    breakpoints: {
      1140: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });
}


/////развернуть блок игры
document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.querySelector(".game-content");
  const toggleButton = document.querySelector(".toggle-button");
  const gradientOverlay = document.querySelector(".gradient-overlay");

  if (!gameContent || !toggleButton || !gradientOverlay) {
    return;
  }

  if (gameContent.scrollHeight > 1630) {
    toggleButton.style.display = "block"; 
  } else {
    gradientOverlay.style.display = "none";
  }

  toggleButton.addEventListener("click", function () {
    if (gameContent.style.maxHeight === "none") {
      gameContent.style.maxHeight = "1000px";
      toggleButton.textContent = "Show more";
      gradientOverlay.style.opacity = "1";
    } else {
      gameContent.style.maxHeight = "none";
      toggleButton.textContent = "Collapse";
      gradientOverlay.style.opacity = "0"; 
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const popupBtn = document.querySelector(".popup");
  const popupFilters = document.querySelector(".popup-filters");

  if (!popupBtn || !popupFilters) return; // Проверяем, есть ли элементы в DOM

  popupBtn.addEventListener("click", function () {
    popupFilters.classList.toggle("active");
  });

  // Закрытие при клике вне окна (опционально)
  document.addEventListener("click", function (event) {
    if (!popupFilters.contains(event.target) && !popupBtn.contains(event.target)) {
      popupFilters.classList.remove("active");
    }
  });
});






const swiperContainer4 = document.querySelector('.swiper-container-game-4');

if (swiperContainer4) {
  const swiper = new Swiper('.swiper-container-game-4', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next', 
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-plag', 
      clickable: true,
    },
    breakpoints: {
      1140: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });
}


const swiperContainer5 = document.querySelector('.swiper-container-game-5');

if (swiperContainer4) {
  const swiper = new Swiper('.swiper-container-game-5', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next', 
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-plag', 
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });
}














document.addEventListener("DOMContentLoaded", () => {
  const flyContainer = document.querySelector(".fly");

  const observer = new IntersectionObserver(
    ([entry]) => {
      flyContainer.classList.toggle("active", entry.isIntersecting);
    },
    { threshold: 0.8 } // Срабатывает, когда контейнер на 50% в зоне видимости
  );

  observer.observe(flyContainer);
});












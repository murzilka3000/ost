


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














// document.addEventListener("DOMContentLoaded", () => {
//   const flyContainer = document.querySelector(".fly");

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       flyContainer.classList.toggle("active", entry.isIntersecting);
//     },
//     { threshold: 0.8 } // Срабатывает, когда контейнер на 50% в зоне видимости
//   );

//   observer.observe(flyContainer);
// });






















const swiperContainer6 = document.querySelector('.swiper-hero-cont');

if (swiperContainer6) {
  const swiper = new Swiper('.swiper-hero-cont', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next-1', 
      prevEl: '.swiper-prev-1',
    },
  });
}





const homeDesc = document.querySelector('.home-desc');
const toggleButton = document.querySelector('.toggle-button2');

// Проверяем, найден ли элемент homeDesc
if (homeDesc) {
    // Задаем начальную высоту для .home-desc
    homeDesc.style.maxHeight = '300px';
    homeDesc.style.overflow = 'hidden';
    homeDesc.style.transition = 'max-height 0.3s ease';

    // Функция для установки или удаления класса, который добавляет псевдоэлемент
    function setGradient() {
        if (homeDesc.style.maxHeight === '300px') {
            homeDesc.classList.add('home-desc--gradient');
        } else {
            homeDesc.classList.remove('home-desc--gradient');
        }
    }

    // Вызываем setGradient при загрузке страницы, чтобы установить градиент при первой загрузке
    setGradient();

    // Проверяем, найден ли элемент toggleButton
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (homeDesc.style.maxHeight === '300px') {
                // Если высота равна 300px, раскрываем его до полной высоты
                homeDesc.style.maxHeight = homeDesc.scrollHeight + 'px';
                toggleButton.innerHTML = `Show less <img src="./images/more.svg" alt="">`;
            } else {
                // Если он уже раскрыт, сворачиваем его обратно
                homeDesc.style.maxHeight = '300px';
                toggleButton.innerHTML = `Show more <img src="./images/more.svg" alt="">`;
            }

            // Вызываем setGradient после каждого клика, чтобы обновить градиент
            setGradient();
        });
    } else {
        console.warn('Элемент с классом toggle-button2 не найден!');
    }
} else {
    console.warn('Элемент с классом home-desc не найден!');
}










// function updateRating2() {
//   let minRange = document.getElementById("min-range2");
//   let maxRange = document.getElementById("max-range2");
//   let track = document.querySelector(".slider-track2");
//   let minYearText = document.getElementById("minYear");
//   let maxYearText = document.getElementById("maxYear");

//   if (!minRange || !maxRange || !track || !minYearText || !maxYearText) {
//       console.error("Один или несколько элементов не найдены!");
//       return;
//   }

//   let minVal = parseInt(minRange.value, 10);
//   let maxVal = parseInt(maxRange.value, 10);

//   // Предотвратить чрезмерное перекрытие ползунков
//   if (minVal > maxVal - 1) {
//       minVal = maxVal - 1;
//       minRange.value = minVal;
//   }
//   if (maxVal < minVal + 1) {
//       maxVal = minVal + 1;
//       maxRange.value = maxVal;
//   }

//   let minPercent = ((minVal - parseInt(minRange.min, 10)) / (parseInt(minRange.max, 10) - parseInt(minRange.min, 10))) * 100;
//   let maxPercent = ((maxVal - parseInt(maxRange.min, 10)) / (parseInt(maxRange.max, 10) - parseInt(maxRange.min, 10))) * 100;

//   // Обновляем позицию и ширину выделенного диапазона
//   track.style.left = minPercent + "%";
//   track.style.width = (maxPercent - minPercent) + "%";

//   // Обновляем отображаемые значения года
//   minYearText.textContent = minVal.toString();
//   maxYearText.textContent = maxVal.toString();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   updateRating2(); // Вызываем updateRating для инициализации отображения
// });





// function updateRating() {
//   let minRange = document.getElementById("min-range");
//   let maxRange = document.getElementById("max-range");
//   let track = document.querySelector(".slider-track");
//   let minText = document.getElementById("minRating");
//   let maxText = document.getElementById("maxRating");

//   if (!minRange || !maxRange || !track || !minText || !maxText) {
//       console.error("One or more elements not found!");
//       return;
//   }

//   let minVal = parseFloat(minRange.value);
//   let maxVal = parseFloat(maxRange.value);

//   if (minVal > maxVal - 0.1) {
//       minVal = maxVal - 0.1;
//       minRange.value = minVal;
//   }
//   if (maxVal < minVal + 0.1) {
//       maxVal = minVal + 0.1;
//       maxRange.value = maxVal;
//   }

//   let minPercent = ((minVal - parseFloat(minRange.min)) / (parseFloat(minRange.max) - parseFloat(minRange.min))) * 100;
//   let maxPercent = ((maxVal - parseFloat(maxRange.min)) / (parseFloat(maxRange.max) - parseFloat(maxRange.min))) * 100;

//   track.style.left = minPercent + "%";
//   track.style.width = (maxPercent - minPercent) + "%";

//   // Обновляем текстовые значения рейтинга
//   minText.textContent = minVal.toFixed(1);
//   maxText.textContent = maxVal.toFixed(1);
// }

// document.addEventListener("DOMContentLoaded", function() {
//   updateRating(); // Call on DOMContentLoaded to initialize values
// });









function updateYearRating() {
  let minRange = document.getElementById("min-range2");
  let maxRange = document.getElementById("max-range2");
  let track = document.querySelector(".slider-track2");
  let minYearText = document.getElementById("minYear");
  let maxYearText = document.getElementById("maxYear");

  if (!minRange || !maxRange || !track || !minYearText || !maxYearText) {
      console.error("Year slider: One or more elements not found!");
      return;
  }

  let minVal = parseInt(minRange.value, 10);
  let maxVal = parseInt(maxRange.value, 10);

  if (minVal > maxVal - 1) {
      minVal = maxVal - 1;
      minRange.value = minVal;
  }
  if (maxVal < minVal + 1) {
      maxVal = minVal + 1;
      maxRange.value = maxVal;
  }

  let minPercent = ((minVal - parseInt(minRange.min, 10)) / (parseInt(minRange.max, 10) - parseInt(minRange.min, 10))) * 100;
  let maxPercent = ((maxVal - parseInt(maxRange.min, 10)) / (parseInt(maxRange.max, 10) - parseInt(maxRange.min, 10))) * 100;

  track.style.left = minPercent + "%";
  track.style.width = (maxPercent - minPercent) + "%";

  minYearText.textContent = minVal.toString();
  maxYearText.textContent = maxVal.toString();
}

// function updateGenericRating() {
//   let minRange = document.getElementById("min-range");
//   let maxRange = document.getElementById("max-range");
//   let track = document.querySelector(".slider-track");
//   let minText = document.getElementById("minRating");
//   let maxText = document.getElementById("maxRating");

//   if (!minRange || !maxRange || !track || !minText || !maxText) {
//       console.error("Generic rating slider: One or more elements not found!");
//       return;
//   }

//   let minVal = parseFloat(minRange.value);
//   let maxVal = parseFloat(maxRange.value);

//   if (minVal > maxVal - 0.1) {
//       minVal = maxVal - 0.1;
//       minRange.value = minVal;
//   }
//   if (maxVal < minVal + 0.1) {
//       maxVal = minVal + 0.1;
//       maxRange.value = maxVal;
//   }

//   let minPercent = ((minVal - parseFloat(minRange.min)) / (parseFloat(minRange.max) - parseFloat(minRange.min))) * 100;
//   let maxPercent = ((maxVal - parseFloat(maxRange.min)) / (parseFloat(maxRange.max) - parseFloat(maxRange.min))) * 100;

//   track.style.left = minPercent + "%";
//   track.style.width = (maxPercent - minPercent) + "%";

//   minText.textContent = minVal.toFixed(1);
//   maxText.textContent = maxVal.toFixed(1);
// }


// document.addEventListener("DOMContentLoaded", function() {
//   updateYearRating();
//   updateGenericRating();
// });
















document.addEventListener('DOMContentLoaded', function() {
  const accordion = document.querySelector('.qua-container'); // Аккордеон
  const items = document.querySelectorAll('.qua-cont-item');
  const plusImagePath = './images/pluse.svg'; // Путь к иконке плюса (закрыто)
  const minusImagePath = './images/min.svg'; // Путь к иконке минуса (открыто)

  // Открываем первый аккордеон по умолчанию
  if (items.length > 0) {
    openAccordionItem(items[0]);
  }

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function() {
      // Если кликнули по уже открытому аккордеону, закрываем его
      if (item.classList.contains('active')) {
        closeAccordionItem(item);
      } else {
        // Закрываем все остальные аккордеоны
        items.forEach(otherItem => {
          if (otherItem !== item) {
            closeAccordionItem(otherItem);
          }
        });

        // Открываем текущий аккордеон
        openAccordionItem(item);
      }
    });
  });

  function openAccordionItem(item) {
    item.classList.add('active');
    item.classList.remove('align-center');
    item.querySelector('.accordion-header').classList.remove('m-0');
    item.querySelector('.accordion-content').classList.add('active');

    // Меняем иконку на минус
    const image = item.querySelector('.img-acc');
    if (image) {
      image.src = minusImagePath;
    }
  }

  function closeAccordionItem(item) {
    item.classList.remove('active');
    item.classList.add('align-center');
    item.querySelector('.accordion-header').classList.add('m-0');
    item.querySelector('.accordion-content').classList.remove('active');

    // Меняем иконку обратно на плюс
    const image = item.querySelector('.img-acc');
    if (image) {
      image.src = plusImagePath;
    }
  }
});
















document.addEventListener("DOMContentLoaded", function() {
  const burgerButton = document.querySelector(".burger");
  const burgerPopup = document.querySelector(".burger-popup");
  const burgerCloseBtn = document.querySelector(".burger-close");

  if (burgerButton && burgerPopup) {
      // Открытие всплывающего окна
      burgerButton.addEventListener("click", () => {
          burgerPopup.style.display = "flex";
      });

      // Закрытие при клике вне окна
      burgerPopup.addEventListener("click", (e) => {
          if (e.target === burgerPopup) {
              burgerPopup.style.display = "none";
          }
      });
  }

  if (burgerCloseBtn) {
      // Закрытие при клике на кнопку "×"
      burgerCloseBtn.addEventListener("click", () => {
          burgerPopup.style.display = "none";
      });
  }
});











const toggleButton2 = document.querySelector('.toggle-button3');
const hiddenItems = document.querySelectorAll('.blog-cont-center-item.hidden');

if (toggleButton2 && hiddenItems.length > 0) {
    toggleButton2.addEventListener('click', () => {
        hiddenItems.forEach(item => {
            item.classList.remove('hidden');
        });
        toggleButton2.style.display = 'none'; // Скрываем кнопку после отображения всех элементов
    });
}

















const swiperContainer10 = document.querySelector('.swiper-container-game-10');

if (swiperContainer10) {
  const swiper = new Swiper('.swiper-container-game-10', {
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
      1186: {
        slidesPerView: 4,
      },
      970: {
        slidesPerView: 3,
      },
      606: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
      
    }
  });
}















const swiperContainer14 = document.querySelector('.swiper-container-game-14');

if (swiperContainer14) {
  const swiper = new Swiper('.swiper-container-game-14', {
    loop: true,
    slidesPerView: 6,
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
        slidesPerView: 6,
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






document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar-tags2").forEach(navbarTags => {
    const moreButton = navbarTags.nextElementSibling?.querySelector("p");
    const moreIcon = navbarTags.nextElementSibling?.querySelector("img");
    const borderItems = navbarTags.querySelectorAll(".border");

    if (!moreButton || !moreIcon || borderItems.length === 0) return;

    // Скрываем все элементы, кроме первых 6
    borderItems.forEach((item, index) => {
      if (index >= 10) {
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
          if (index >= 10) item.style.display = "none"; // Снова скрываем элементы
        });
        moreButton.textContent = "Show more";
        moreIcon.style.transform = "rotate(0deg)";
      }
    });
  });
});




















const tabButtons = document.querySelectorAll('.tab-button');
const formContents = document.querySelectorAll('.form-content');
const passwordToggles = document.querySelectorAll('.toggle-password');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

function switchTab(targetTabId) {
    tabButtons.forEach(button => button.classList.remove('active'));
    formContents.forEach(content => content.classList.remove('active'));

    const targetTabButton = document.querySelector(`.tab-button[data-tab="${targetTabId}"]`);
    const targetFormContent = document.getElementById(targetTabId);

    if (targetTabButton && targetFormContent) {
        targetTabButton.classList.add('active');
        targetFormContent.classList.add('active');
    }
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
    });
});

passwordToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
      const passwordInput = toggle.previousElementSibling;
      const img = toggle.querySelector('img');

      if (passwordInput && img && (passwordInput.type === 'password' || passwordInput.type === 'text')) {
          if (passwordInput.type === 'password') {
              passwordInput.type = 'text';
              img.src = './images/Union.svg';
              img.alt = 'Hide password';
          } else {
              passwordInput.type = 'password';
              img.src = './images/Union2.svg';
              img.alt = 'Show password';
          }
      }
  });
});

if (showSignupLink) {
    showSignupLink.addEventListener('click', (event) => {
        event.preventDefault();
        switchTab('signup');
    });
}

if (showLoginLink) {
    showLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        switchTab('login');
    });
}





document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  // Use helper function for safe selection
  const getElement = (selector) => document.querySelector(selector);
  const getElementById = (id) => document.getElementById(id);
  const getAllElements = (selector) => document.querySelectorAll(selector);

  const dateInputContainer = getElement('.date-input-container');
  const selectedDateInput = getElementById('selected-date-input');
  const calendarIcon = getElementById('calendar-icon'); // Although not used directly in listeners, good practice
  const calendarPopup = getElementById('calendar-popup');
  const calendarViews = getElementById('calendar-views');
  const dateView = getElementById('date-view');
  const monthView = getElementById('month-view');
  const yearView = getElementById('year-view');

  // Date View Elements
  const headerMonth = getElementById('header-month');
  const headerYear = getElementById('header-year');
  const dateGridCells = getElementById('date-grid-cells');

  // Month View Elements
  const monthViewYear = getElementById('month-view-year');
  const monthGridCells = getElementById('month-grid-cells');

  // Year View Elements
  const yearViewDecade = getElementById('year-view-decade');
  const yearGridCells = getElementById('year-grid-cells');

  // Navigation Buttons
  const prevButtons = getAllElements('.prev-btn');
  const nextButtons = getAllElements('.next-btn');

  // --- Locale Data ---
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // --- Helper Functions ---
  const formatDate = (date) => {
      if (!date || !(date instanceof Date)) return ''; // Added check for valid Date object
      try {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return `${day}.${month}.${year}`;
      } catch (e) {
          console.error("Error formatting date:", date, e);
          return ''; // Return empty string on error
      }
  };

  const parseDate = (dateString) => {
      if (!dateString || typeof dateString !== 'string') {
          // Handle null, undefined, or non-string input
           console.warn("Invalid input to parseDate:", dateString, "- Falling back to today.");
           const today = new Date();
           today.setHours(0,0,0,0);
           return today;
      }
      const parts = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
      if (parts) {
          const year = parseInt(parts[3], 10);
          const month = parseInt(parts[2], 10) - 1; // Month is 0-indexed
          const day = parseInt(parts[1], 10);
          if (year > 0 && month >= 0 && month <= 11 && day > 0 && day <= 31) {
               const date = new Date(year, month, day);
               // Check if the date object is valid and matches the input parts
               if (date && date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
                  date.setHours(0, 0, 0, 0); // Normalize
                  return date;
               }
          }
      }
      console.warn("Could not parse date string:", dateString, "- Falling back to today.");
      const today = new Date();
      today.setHours(0,0,0,0);
      return today; // Fallback
  };

  // --- State ---
  // Use optional chaining (?.) when accessing properties of potentially null elements
  let initialDateValue = selectedDateInput?.value || '';
  let currentDate = parseDate(initialDateValue); // parseDate now handles empty/invalid string
  currentDate.setHours(0, 0, 0, 0); // Normalize selected date

  let displayYear = currentDate.getFullYear();
  let displayMonth = currentDate.getMonth(); // 0-11
  let displayDecadeStart;

  // --- View Switching ---
  const switchView = (view) => {
      currentView = view;
      if (!calendarViews) return; // Exit if the main container is missing

      // Hide all views (only if calendarViews exists)
      calendarViews.querySelectorAll('.calendar-view').forEach(v => v?.classList.remove('active-view'));

      // Show the target view
      const targetView = getElementById(`${view}-view`);
      if (targetView) {
          targetView.classList.add('active-view');
          // Render the content for the new view (updateCalendar checks its own elements)
          updateCalendar();
      } else {
          console.error("Target view not found:", view);
      }
  };

  // --- Rendering Functions ---

  // Render Date Grid
  const renderDateGrid = () => {
      // Guard clause: Exit if essential elements are missing
      if (!dateGridCells || !headerMonth || !headerYear) {
          console.warn("Cannot render Date Grid: Missing required elements (dateGridCells, headerMonth, or headerYear).");
          return;
      }

      dateGridCells.innerHTML = ''; // Safe now due to guard clause
      headerMonth.textContent = monthNames[displayMonth];
      headerYear.textContent = displayYear;

      const firstDayOfMonth = new Date(displayYear, displayMonth, 1);
      const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
      let startDayIndex = firstDayOfMonth.getDay();
      startDayIndex = startDayIndex === 0 ? 6 : startDayIndex - 1;
      const daysInPrevMonth = new Date(displayYear, displayMonth, 0).getDate();

      // Previous month's days
      for (let i = startDayIndex - 1; i >= 0; i--) {
          const day = daysInPrevMonth - i;
          const cell = document.createElement('div');
          cell.classList.add('day-cell', 'other-month');
          cell.textContent = day;
          dateGridCells.appendChild(cell); // Safe
      }

      // Current month's days
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      for (let day = 1; day <= daysInMonth; day++) {
          const cell = document.createElement('div');
          cell.classList.add('day-cell');
          cell.textContent = day;
          const cellDate = new Date(displayYear, displayMonth, day);
          cellDate.setHours(0, 0, 0, 0);

          if (cellDate.getTime() === today.getTime()) cell.classList.add('today');
          // Use optional chaining for currentDate in case it's somehow null (though parseDate provides fallback)
          if (currentDate && cellDate.getTime() === currentDate.getTime()) cell.classList.add('selected');

          cell.addEventListener('click', () => handleDateClick(cellDate));
          dateGridCells.appendChild(cell); // Safe
      }

      // Next month's days
      const totalCells = startDayIndex + daysInMonth;
      const remainingCells = (totalCells % 7 === 0) ? 0 : 7 - (totalCells % 7);
      for (let i = 1; i <= remainingCells; i++) {
          const cell = document.createElement('div');
          cell.classList.add('day-cell', 'other-month');
          cell.textContent = i;
          dateGridCells.appendChild(cell); // Safe
      }
  };

  // Render Month Grid
  const renderMonthGrid = () => {
      // Guard clause
      if (!monthGridCells || !monthViewYear) {
          console.warn("Cannot render Month Grid: Missing required elements (monthGridCells or monthViewYear).");
          return;
      }

      monthGridCells.innerHTML = ''; // Safe
      monthViewYear.textContent = displayYear; // Safe

      monthNames.forEach((name, index) => {
          const cell = document.createElement('div');
          cell.classList.add('month-cell');
          cell.textContent = name;

           if (index === displayMonth) cell.classList.add('selected');
           if (currentDate && index === currentDate.getMonth() && displayYear === currentDate.getFullYear()) {
              cell.classList.add('selected');
           }

          cell.addEventListener('click', () => handleMonthClick(index));
          monthGridCells.appendChild(cell); // Safe
      });
  };

  // Render Year Grid
  const renderYearGrid = () => {
      // Guard clause
      if (!yearGridCells || !yearViewDecade) {
           console.warn("Cannot render Year Grid: Missing required elements (yearGridCells or yearViewDecade).");
           return;
      }

      yearGridCells.innerHTML = ''; // Safe
      displayDecadeStart = Math.floor(displayYear / 10) * 10;
      const decadeEnd = displayDecadeStart + 9;
      yearViewDecade.textContent = `${displayDecadeStart}-${decadeEnd}`; // Safe

      const yearGridStart = displayDecadeStart - 1;
      const yearGridEnd = displayDecadeStart + 10;

      for (let year = yearGridStart; year <= yearGridEnd; year++) {
          const cell = document.createElement('div');
          cell.classList.add('year-cell');
          cell.textContent = year;

          if (year < displayDecadeStart || year > decadeEnd) cell.classList.add('other-decade');
          if (year === displayYear) cell.classList.add('selected');
          if (currentDate && year === currentDate.getFullYear()) cell.classList.add('selected');

          cell.addEventListener('click', () => handleYearClick(year));
          yearGridCells.appendChild(cell); // Safe
      }
  };

  // Update Calendar based on current view
  const updateCalendar = () => {
      // The render functions themselves now contain checks for their required elements
      switch (currentView) {
          case 'date':
              renderDateGrid();
              break;
          case 'month':
              renderMonthGrid();
              break;
          case 'year':
              renderYearGrid();
              break;
      }
  };

  // --- Event Handlers ---

  const handleDateClick = (date) => {
      currentDate = date; // Update the actual selected date
      // Only update input if it exists
      if (selectedDateInput) {
          selectedDateInput.value = formatDate(date);
      }
      displayYear = date.getFullYear();
      displayMonth = date.getMonth();
      toggleCalendar(false); // Close popup (toggleCalendar checks for popup existence)
  };

  const handleMonthClick = (monthIndex) => {
      displayMonth = monthIndex;
      switchView('date'); // switchView handles missing elements
  };

  const handleYearClick = (year) => {
      displayYear = year;
      switchView('month'); // switchView handles missing elements
  };

  const toggleCalendar = (forceShow = null) => {
      // Exit if the popup element doesn't exist
      if (!calendarPopup) {
          console.warn("Cannot toggle calendar: calendarPopup element not found.");
          return;
      }

      const isActive = calendarPopup.classList.contains('active');
      if (forceShow === true || (forceShow === null && !isActive)) {
          // Ensure currentDate is valid before accessing properties
          if (currentDate && typeof currentDate.getFullYear === 'function') {
             displayYear = currentDate.getFullYear();
             displayMonth = currentDate.getMonth();
          } else {
             // Fallback if currentDate is somehow invalid (shouldn't happen with parseDate)
             const now = new Date();
             displayYear = now.getFullYear();
             displayMonth = now.getMonth();
             console.warn("toggleCalendar: Invalid currentDate state, falling back to current month/year.");
          }
          switchView('date'); // Render the default view
          calendarPopup.classList.add('active');

      } else if (forceShow === false || (forceShow === null && isActive)) {
          calendarPopup.classList.remove('active');
      }
  };

  // --- Event Listener Setup ---

  // Input/Icon Click
  if (dateInputContainer) {
      dateInputContainer.addEventListener('click', (event) => {
          event.stopPropagation();
          toggleCalendar(); // toggleCalendar has its own check
      });
  } else {
      console.warn("Date input container not found. Calendar toggle via input click disabled.");
  }


  // Header Controls Click
  if (headerMonth) {
      headerMonth.addEventListener('click', (event) => {
          event.stopPropagation();
          if (currentView === 'date') {
              switchView('month'); // switchView has checks
          }
      });
  }
   if (headerYear) {
       headerYear.addEventListener('click', (event) => {
           event.stopPropagation();
           if (currentView === 'date' || currentView === 'month') {
               switchView('year'); // switchView has checks
           }
       });
   }
  if (monthViewYear) {
      monthViewYear.addEventListener('click', (event) => {
          event.stopPropagation();
          if (currentView === 'month') {
               switchView('year'); // switchView has checks
          }
      });
  }

  // Navigation Buttons
  const handleNav = (direction) => {
      // No DOM elements needed here, just state manipulation
      switch (currentView) {
          case 'date':
              if (direction === 'prev') {
                  displayMonth--;
                  if (displayMonth < 0) { displayMonth = 11; displayYear--; }
              } else {
                  displayMonth++;
                  if (displayMonth > 11) { displayMonth = 0; displayYear++; }
              }
              break;
          case 'month':
              displayYear += (direction === 'prev' ? -1 : 1);
              break;
          case 'year':
              const decadeJump = direction === 'prev' ? -10 : 10;
              displayYear += decadeJump;
              break;
      }
      updateCalendar(); // updateCalendar calls render functions which have checks
  };

  // Add listeners only if buttons exist
  if (prevButtons.length > 0) {
      prevButtons.forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); handleNav('prev'); }));
  } else {
       console.warn("Previous navigation buttons not found.");
  }
  if (nextButtons.length > 0) {
       nextButtons.forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); handleNav('next'); }));
  } else {
      console.warn("Next navigation buttons not found.");
  }

  // Click outside to close
  document.addEventListener('click', (event) => {
      // Check if core elements exist before proceeding
      if (!calendarPopup || !dateInputContainer) return;

      // Use optional chaining for safety, although we checked above
      const isPopupActive = calendarPopup.classList.contains('active');

      // Check if the click is outside the popup AND outside the input container
      if (isPopupActive &&
          !calendarPopup.contains(event.target) &&
          !dateInputContainer.contains(event.target))
      {
           toggleCalendar(false); // toggleCalendar is guarded
      }
  });

  // --- Initialization ---
  // Set initial input value only if input exists
  if (selectedDateInput) {
      selectedDateInput.value = formatDate(currentDate);
  }

  // Initial render (optional, only if you want it open by default)
  // If you want the calendar closed initially, remove or comment out the next line
  // updateCalendar(); // Render based on initial state (render functions have checks)

});
















document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tabs-container175');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-button175');
    const tabContents = container.querySelectorAll('.tab-content175'); // <- ИСПРАВЛЕНО
    const tabButtonContainer = container.querySelector('.tab-buttons175');

    if (!tabButtonContainer) {
      console.error('Контейнер кнопок .tab-buttons175 не найден в одном из наборов!');
      return;
    }

    tabButtonContainer.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('.tab-button175');
      if (!clickedButton) return;

      const tabId = clickedButton.dataset.tab;

      // Убираем активные классы
      tabButtons.forEach(button => button.classList.remove('active175'));
      tabContents.forEach(content => content.classList.remove('active175')); // <- ИСПРАВЛЕНО

      // Добавляем активный класс
      clickedButton.classList.add('active175');
      const activeContent = container.querySelector(`#${tabId}`);
      if (activeContent) {
        activeContent.classList.add('active175');
      } else {
        console.warn(`Контент с ID "${tabId}" не найден в текущем контейнере.`);
      }
    });
  });
});
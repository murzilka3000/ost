


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
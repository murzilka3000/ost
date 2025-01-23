document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  let selectedOption = null;

  dropdowns.forEach(dropdown => {
      const header = dropdown.querySelector('.dropdown-header');
      const content = dropdown.querySelector('.dropdown-content');
      const arrow = header.querySelector('.arrow');
      const options = dropdown.querySelectorAll('.dropdown-option');

      header.addEventListener('click', () => {
          header.classList.toggle('active');
          if(header.classList.contains('active')){
              arrow.classList.remove('down');
              arrow.classList.add('up');
          } else {
              arrow.classList.remove('up');
              arrow.classList.add('down');
          }
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });

       options.forEach(option => {
          option.addEventListener('click', () => {
              if (selectedOption) {
                  selectedOption.classList.remove('selected');
                   const check = selectedOption.querySelector('.check-mark');
                   if (check) check.remove();
              }
                option.classList.add('selected');
                 option.innerHTML += `<span class="check-mark"><img src="/images/check.svg" alt="check"></span>`;
              selectedOption = option;
         });
      });
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const gamesGrid = document.querySelector('.games-grid-content');
  const pagination = document.querySelector('.pagination');
  const gamesPerPage = 12;
  const allGames = Array.from(gamesGrid.querySelectorAll('.games-grid-content-item'));
  let currentPage = 1;

  function renderGames() {
    allGames.forEach(game => {
      game.style.display = 'none';
    });

    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesToDisplay = allGames.slice(startIndex, endIndex);

    gamesToDisplay.forEach(game => {
      game.style.display = 'block';
    });
  }

  function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(allGames.length / gamesPerPage);

    const maxVisiblePages = 5;


        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                createPageButton(i);
            }
        } else {
        let startPage;
        let endPage;
        if (currentPage <= Math.ceil(maxVisiblePages / 2)){
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)){
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxVisiblePages / 2);
                endPage = currentPage + Math.floor(maxVisiblePages / 2);
            }

            if (startPage > 1){
                createPageButton(1);
                    const dots = document.createElement('span');
                    dots.textContent = '...';
                pagination.appendChild(dots);

            }

            for (let i = startPage; i <= endPage; i++) {
              createPageButton(i)
            }

            if (endPage < totalPages){
                const dots = document.createElement('span');
                dots.textContent = '...';
                pagination.appendChild(dots);
                createPageButton(totalPages);
            }
        }
       const nextButton = document.createElement('button');
      nextButton.innerHTML = '<img src="/images/gal.svg">'; // Corrected Line
      nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderGames();
          renderPagination();
        }
      });
      pagination.appendChild(nextButton);
  }

function createPageButton(i) {
  const pageButton = document.createElement('button');
  pageButton.textContent = i;
  if (i === currentPage) {
      pageButton.classList.add('current');
  }
  pageButton.addEventListener('click', () => {
      currentPage = i;
      renderGames();
      renderPagination();
  });
    pagination.appendChild(pageButton);
}

  renderGames();
  renderPagination();
});




























document.addEventListener('DOMContentLoaded', function() {
  const gamesGrid = document.querySelector('.games-grid-content');
  const pagination = document.querySelector('.pagination2');
  const gamesPerPage = 12;
  const allGames = Array.from(gamesGrid.querySelectorAll('.games-grid-content-item'));
  let currentPage = 1;

  function renderGames() {
    allGames.forEach(game => {
      game.style.display = 'none';
    });

    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesToDisplay = allGames.slice(startIndex, endIndex);

    gamesToDisplay.forEach(game => {
      game.style.display = 'block';
    });
  }

  function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(allGames.length / gamesPerPage);

    const maxVisiblePages = 5;


        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                createPageButton(i);
            }
        } else {
        let startPage;
        let endPage;
        if (currentPage <= Math.ceil(maxVisiblePages / 2)){
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)){
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxVisiblePages / 2);
                endPage = currentPage + Math.floor(maxVisiblePages / 2);
            }

            if (startPage > 1){
                createPageButton(1);
                    const dots = document.createElement('span');
                    dots.textContent = '...';
                pagination.appendChild(dots);

            }

            for (let i = startPage; i <= endPage; i++) {
              createPageButton(i)
            }

            if (endPage < totalPages){
                const dots = document.createElement('span');
                dots.textContent = '...';
                pagination.appendChild(dots);
                createPageButton(totalPages);
            }
        }
       const nextButton = document.createElement('button');
      nextButton.innerHTML = '<img src="/images/gal.svg">'; // Corrected Line
      nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderGames();
          renderPagination();
        }
      });
      pagination.appendChild(nextButton);
  }

function createPageButton(i) {
  const pageButton = document.createElement('button');
  pageButton.textContent = i;
  if (i === currentPage) {
      pageButton.classList.add('current');
  }
  pageButton.addEventListener('click', () => {
      currentPage = i;
      renderGames();
      renderPagination();
  });
    pagination.appendChild(pageButton);
}

  renderGames();
  renderPagination();
});
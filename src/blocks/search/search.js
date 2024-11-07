// Выпадающий список в поиске
if (document.querySelector('.search__dropdown')) {
  const searchDropdownButton = document.querySelector(
    '.search__dropdown-button'
  );
  const searchDropdownContainer = document.querySelector('.search__dropdown');
  const openDropdownList = function () {
    searchDropdownContainer.classList.add('search__dropdown--opened');
  };
  const closeDropdownList = function () {
    searchDropdownContainer.classList.remove('search__dropdown--opened');
  };

  searchDropdownButton.addEventListener('click', () => {
    if (
      searchDropdownContainer.classList.contains('search__dropdown--opened')
    ) {
      closeDropdownList();
    } else {
      openDropdownList();
    }
  });
}

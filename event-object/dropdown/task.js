document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
  const closeAll = () => {
    dropdowns.forEach(d => {
      const list = d.querySelector('.dropdown__list');
      if (list) list.classList.remove('dropdown__list_active');
    });
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown')) return;
    closeAll();
  });
  dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    if (!value || !list) return;
    value.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          const otherList = d.querySelector('.dropdown__list');
          if (otherList) otherList.classList.remove('dropdown__list_active');
        }
      });
      list.classList.toggle('dropdown__list_active');
    });
    list.addEventListener('click', (e) => {
      const link = e.target.closest('.dropdown__link');
      if (!link) return;
      e.preventDefault();
      const chosenText = link.textContent.trim();
      value.textContent = chosenText;
      list.classList.remove('dropdown__list_active');
    });
  });
});



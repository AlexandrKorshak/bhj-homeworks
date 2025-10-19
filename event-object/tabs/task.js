const tabNavigations = document.querySelectorAll('.tab__navigation');

tabNavigations.forEach(nav => {
  const tabs = Array.from(nav.querySelectorAll('.tab'));
  let contentsContainer = null;
  if (nav.nextElementSibling && nav.nextElementSibling.classList.contains('tab__contents')) {
    contentsContainer = nav.nextElementSibling;
  } else if (nav.parentElement) {
    contentsContainer = nav.parentElement.querySelector('.tab__contents');
  }
  if (!contentsContainer) return;
  const contents = Array.from(contentsContainer.querySelectorAll('.tab__content'));
  nav.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab');
    if (!clickedTab || !nav.contains(clickedTab)) return;
    const index = tabs.indexOf(clickedTab);
    if (index === -1) return;
    tabs.forEach(t => t.classList.remove('tab_active'));
    contents.forEach(c => c.classList.remove('tab__content_active'));
    clickedTab.classList.add('tab_active');
    if (contents[index]) contents[index].classList.add('tab__content_active');
  });
});


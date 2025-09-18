document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchButton = searchForm.querySelector('button');
  const searchInput = searchForm.querySelector('input');

  searchButton.addEventListener('click', (e) => {
    // Evita que el formulario se envíe si el campo está vacío
    if (!searchForm.classList.contains('active')) {
      e.preventDefault();
      searchForm.classList.add('active');
      searchInput.focus(); // Coloca el cursor en el input
    }
  });

  // Opcional: Oculta el buscador al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && searchForm.classList.contains('active')) {
      searchForm.classList.remove('active');
    }
  });
});
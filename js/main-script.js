const Botaovoltaraotopo = document.querySelector('.voltar-ao-topo');
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    Botaovoltaraotopo.style.display = 'block';
  } else {
    Botaovoltaraotopo.style.display = 'none';
  }
});
Botaovoltaraotopo.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
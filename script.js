const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
});

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navigation.classList.remove('open'));
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', selected !== 'all' && card.dataset.category !== selected);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

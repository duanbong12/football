document.querySelectorAll('.filter-title').forEach(function(title) {
  title.addEventListener('click', function() {
    this.classList.toggle('active');
    var options = this.nextElementSibling;
    if (options.style.display === 'none') {
      options.style.display = 'block';
      this.querySelector('i').style.transform = 'rotate(180deg)';
    } else {
      options.style.display = 'none';
      this.querySelector('i').style.transform = 'rotate(0deg)';
    }
  });
});
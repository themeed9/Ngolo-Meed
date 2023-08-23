  
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navlink button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('btnActive'));
        this.classList.add('btnActive');
      });
    });
  });
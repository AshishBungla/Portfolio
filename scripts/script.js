$(document).ready(function(){
  AOS.init({
    offset: 150, 
    delay: 0, 
    duration: 700
  });

if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
  document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
      const targetElement = document.querySelector(internalLink.getAttribute('href'));
      if (targetElement) {
          internalLink.addEventListener('click', (e) => {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
              });
              e.preventDefault();
          });
      }
  });
}

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  }); 

});

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    },
    );
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  }

  );

});




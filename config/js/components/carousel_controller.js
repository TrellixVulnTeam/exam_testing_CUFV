function playSlideShow() {
    // const elements inside the slide.
    const slideItems = document.querySelectorAll(".slide-container");
    const button_next = document.querySelector(".next-btn");
    const button_prev = document.querySelector(".prev-btn");
   
    slideItems.forEach(function (slide, index) {
     slide.style.left = `${index * 1}%`;
    });
   
    // Counter
    let count = 0;
   
    // next button eventlistener
    button_next.addEventListener("click", function () {
     count++;
     slide();
    });
   
    // Prev button eventlistener
    button_prev.addEventListener("click", function () {
     count--;
     slide();
    });
   
    function slide() {
     // Making the slides go back
     if (count === slideItems.length) {
      count = 0;
     }
   
     // Making it go both ways from the first slide
     if (count < 0) {
      count = slideItems.length - 1;
     }
   
     // Adding translate(x) to the style of the slides.
     slideItems.forEach(function (slide) {
      slide.style.transform = `translateX(-${count * 100}%)`;
     });
    }
   }
   playSlideShow();
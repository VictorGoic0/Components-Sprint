class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.images = this.carousel.querySelectorAll('img');


    this.leftButton.addEventListener('click', () => this.leftButtonPress());
    this.rightButton.addEventListener('click', () => this.rightButtonPress());
  }
  rightButtonPress() {
    const images = this.images;
    const length = images.length;

    for (let i=0; i<length; i++) {

      if (images[length-1].classList.contains('active-img') && images[0].classList.contains('active-img')) {
        images[length-1].classList.remove('active-img');
        images[1].classList.add('active-img');
        images[0].style.order = 0;
        break;
      }

      if (images[length-1].classList.contains('active-img') && images[length-2].classList.contains('active-img')) {
        images[length-2].classList.remove('active-img');
        images[0].classList.add('active-img');
        images[length-1].style.order = -1;
        break;
      }

      if (images[1].classList.contains('active-img')) {
        images[length-1].style.order = 0;
      }

      if (images[i].classList.contains('active-img')) {
        images[i].classList.remove('active-img');
        images[i+2].classList.add('active-img');
        break;
      }
    }
    images.forEach( img => TweenMax.from(img, 1, {x:1200, ease:Power3.easeOut}));
  }
  leftButtonPress() {
    const images = this.images;
    const length = images.length;

    for (let i=length-1; i>=0; i--) {

      if (images[0].classList.contains('active-img') && images[1].classList.contains('active-img')) {
        images[1].classList.remove('active-img');
        images[0].style.order = 1;
        images[length-1].classList.add('active-img');
        break;
      }

      if (images[1].classList.contains('active-img') && images[2].classList.contains('active-img')) {
        images[0].style.order = 0;
      }

      if (images[length-1].classList.contains('active-img') && images[0].classList.contains('active-img')) {
        images[0].classList.remove('active-img');
        images[length-1].style.order = 0;
        images[length-2].classList.add('active-img');
        break;
      }

      if (images[i].classList.contains('active-img')) {
        images[i].classList.remove('active-img');
        images[i-2].classList.add('active-img');
        break;
      }
    }
    images.forEach( img => TweenMax.from(img, 1, {x:-1200, ease:Power3.easeOut}));
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

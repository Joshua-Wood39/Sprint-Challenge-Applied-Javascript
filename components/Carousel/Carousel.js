class Carousel {
        constructor(carousel) {
            this.carousel = carousel;
            this.leftB = document.querySelector('.left-button');
            this.rightB = document.querySelector('.right-button');

            //index
            // this.imgOne = document.querySelector('.carImg[data-num="1"]');
            // this.imgTwo = document.querySelector('.carImg[data-num="2"]');
            // this.imgThree = document.querySelector('.carImg[data-num="3"]');
            // this.imgFour = document.querySelector('.carImg[data-num="4"]');
            // console.log(this.imgOne);
            this.imgIndex = document.querySelectorAll('.carImg');
            
            //initial slide
            this.currentSlide = 0;
            this.imgIndex[0].style.display = 'flex'; 
            
            
            this.leftB.addEventListener('click', () => this.leftButton());
            this.rightB.addEventListener('click', () => this.rightButton());
        }
        leftButton() {
            if(this.currentSlide === 0) {
                    this.imgIndex[this.currentSlide].style.display = 'none';
                    this.currentSlide = 3;
                    this.imgIndex[this.currentSlide].style.display = 'flex';
                    TweenMax.from(this.imgIndex[this.currentSlide], 1.5, {x:1000});
                    return;
            }
            this.imgIndex[this.currentSlide].style.display = 'none';
            this.currentSlide--;
            this.imgIndex[this.currentSlide].style.display = 'flex';
            TweenMax.from(this.imgIndex[this.currentSlide], 1.5, {x:1000});
        }

        rightButton() {
            if(this.currentSlide === 3) {
                this.imgIndex[this.currentSlide].style.display = 'none';
                this.currentSlide = 0;
                this.imgIndex[this.currentSlide].style.display = 'flex';
                TweenMax.from(this.imgIndex[this.currentSlide], 1.5, {x:-1000});
                return;
            }
            this.imgIndex[this.currentSlide].style.display = 'none';
            this.currentSlide++;
            this.imgIndex[this.currentSlide].style.display = 'flex';
            TweenMax.from(this.imgIndex[this.currentSlide], 1.5, {x:-1000});

        }




}




let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


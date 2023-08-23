const cardContainer = document.querySelector('.card-container');
const cardControlsContainer = document.querySelector('.card-controls');
const cardControls = ['previous', 'next'];
const cardItems = document.querySelectorAll('.card-item');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateCard() {
        this.carouselArray.forEach(el => {
            el.classList.remove('card-item-2');
            el.classList.remove('card-item-3');
            el.classList.remove('card-item-4');
        })

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`card-item-${i + 1}`);
        })
    }

    setCurrentState(direction) {
        if (direction.className = 'card-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateCard()
    }

    setControlls() {
        this.carouselControls.forEach(control => {
            cardControlsContainer.appendChild(document.createElement('button')).className = `card-controls-${control}`;
            document.querySelector(`.card-controls-${control}`).innerText = control;
        })
    }

    useControls() {
        const triggers = [...cardControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const exampleCarousel = new Carousel(cardContainer, cardItems, cardControls)

exampleCarousel.setControlls();
exampleCarousel.useControls();
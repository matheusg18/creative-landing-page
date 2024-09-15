interface ISlider {
  heading: string;
  image: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  };
}

class CreativeSlider extends HTMLElement {
  private currentIndex: number;
  private slides: ISlider[];

  constructor() {
    super();

    this.currentIndex = 0;
    this.slides = [];
  }

  connectedCallback() {
    const image1 = this.getAttribute('data-image1') || '';
    const image2 = this.getAttribute('data-image2') || '';
    const image3 = this.getAttribute('data-image3') || '';

    this.buildSlides(image1, image2, image3);
    this.addSliderBehavior();
  }

  private buildSlides(image1: string, image2: string, image3: string) {
    this.slides = [
      {
        heading: 'Brand naming & guidelines',
        image: {
          src: image1,
          alt: 'Diagram showing a product development cycle with phases like Measure, Product, Build, Growth, and Validate. Text discusses Minimum Viable Product (MVP) and Minimum Desirable Product (MDP)',
          title: 'Lean Product Roadmap',
          subtitle: '2019 Project',
        },
      },
      {
        heading: 'Brand identity & merchandise',
        image: {
          src: image2,
          alt: 'Black tote bag with white text that reads "New Majestic Hotel" and the hashtag "#NMH10"',
          title: 'New Majestic Hotel',
          subtitle: '2018 Project',
        },
      },
      {
        heading: 'Brand identity & web design',
        image: {
          src: image3,
          alt: 'Screenshot of a cryptocurrency exchange interface showing a balance of Ethereum (ETH) with options to deposit, withdraw, and view deposit history',
          title: 'Crypto Dashboard',
          subtitle: '2016 Project',
        },
      },
    ];
  }

  private addSliderBehavior() {
    const prevButton = this.querySelector('#prev');
    const nextButton = this.querySelector('#next');

    prevButton?.addEventListener('click', this.goToPreviousSlide.bind(this));
    nextButton?.addEventListener('click', this.goToNextSlide.bind(this));

    document.addEventListener('keydown', (event) => {
      event.preventDefault();

      if (event.key === 'ArrowLeft') this.goToPreviousSlide();
      if (event.key === 'ArrowRight') this.goToNextSlide();
    });
  }

  private goToPreviousSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.replaceSlideContent(this.slides[this.currentIndex]);
  }

  private goToNextSlide() {
    this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
    this.replaceSlideContent(this.slides[this.currentIndex]);
  }

  private replaceSlideContent(actualSlide: ISlider) {
    const image = this.querySelector('#creative-slider-image');
    const title = this.querySelector('#creative-slider-title');
    const subtitle = this.querySelector('#creative-slider-subtitle');
    const heading = this.querySelector('#creative-slider-heading');

    if (image) {
      image.setAttribute('src', actualSlide.image.src);
      image.setAttribute('alt', actualSlide.image.alt);
    }

    if (title) title.textContent = actualSlide.image.title;

    if (subtitle) subtitle.textContent = actualSlide.image.subtitle;

    if (heading) heading.textContent = actualSlide.heading;
  }
}

customElements.define('creative-slider', CreativeSlider);

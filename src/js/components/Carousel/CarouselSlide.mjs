import Component from "../Component/Component.mjs";
import CarouselSlideModal from "./CarouselSlideModal.mjs";
import * as config from "../../config";
import CarouselSlideImage from "./CarouselSlideImage.mjs";

export default class CarouselSlide extends Component {
  $slideModal;
  $slideImage;
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("li");
    this.$currElement.className = "carousel__slide";
    this.$currElement.setAttribute("data-id", this.$state.data.id);
    this.$currElement.setAttribute("data-genre", this.$state.data.genre);

    this.render();

    this.addHandlerLazyLoadImage();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderSpinner();

    this.$slideModal = new CarouselSlideModal({
      parentElement: this.$currElement,
      state: this.$state,
    });

    this.$slideImage = new CarouselSlideImage({
      parentElement: this.$currElement,
      state: this.$state,
    });

    this.$parentElement.appendChild(this.$currElement);
  }

  // UPDATE:
  addHandlerLazyLoadImage() {
    const options = {
      threshold: config.LAZY_LOAD_IMAGE_THRESHOLD,
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          imageObserver.unobserve(entry.target);
          await this.$slideModal.loadImage();
          await this.$slideImage.loadImage();
          this.removeSpinner();
        }
      });
    }, options);

    imageObserver.observe(this.$currElement);
  }
}

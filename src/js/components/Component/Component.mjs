export default class Component {
  $parentElement;
  $currElement;
  $state;

  constructor({ parentElement, state = {} }) {
    this.$parentElement = parentElement;
    this.$state = state;
  }

  renderSpinner() {
    const spinnerMarkup = `
      <div class="spinner">
        <i class="fas fa-spinner"></i>
      </div>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", spinnerMarkup);
  }

  removeSpinner() {
    const spinner = this.$currElement.querySelector(".spinner");
    this.$currElement.removeChild(spinner);
  }
}

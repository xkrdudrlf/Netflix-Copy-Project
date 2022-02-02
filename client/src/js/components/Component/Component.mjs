export default class Component {
  $parentElement;
  $currElement;
  $childrenElements = [];
  $state;

  constructor({ parentElement, state = {} }) {
    this.$parentElement = parentElement;
    this.$state = state;
  }

  addChildren(childrenElements) {
    childrenElements.forEach((child) => {
      this.$childrenElements.push(child);
    });
  }

  update(changedStates = null) {}

  setState(newState) {
    const changedStates = {};

    // 1. Update states
    for (const [key, value] of Object.entries(newState)) {
      if (!this.$state[key] || this.$state[key] === value) continue;
      this.$state[key] = value;
      changedStates[key] = value;
    }
    if (!Object.keys(changedStates).length) return;

    // 2. Update the current component
    this.update(changedStates);

    // 3. Update the children components
    this.$childrenElements.forEach((child) => {
      if (Object.keys(child.$state).length > 0) {
        child.setState(changedStates);
      }
    });
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

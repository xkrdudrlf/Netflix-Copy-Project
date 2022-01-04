export default class Component {
  $parentElement;
  $currElement;
  $state;

  constructor({ parentElement, state = {} }) {
    this.$parentElement = parentElement;
    this.$state = state;
  }
}

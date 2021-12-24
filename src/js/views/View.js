export default class View {
  _parentElement;
  _currentElement;
  _elementTag;
  _className;

  constructor(parentElement, elementTag = "div", className) {
    this._parentElement = parentElement;
    this._elementTag = elementTag;
    this._className = className;
  }

  render() {
    const element = this._generateElement();
    this._currentElement = element;
    this._parentElement.insertAdjacentElement("beforeend", element);
  }
}

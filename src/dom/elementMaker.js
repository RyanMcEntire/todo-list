/* eslint-disable no-restricted-syntax */
export default class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  addAttributes(attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      this.attributes[key] = value;
    }
    return this;
  }

  addChild(childElement) {
    this.innerText = undefined;
    this.children.push(childElement);
    return this;
  }

  setInnerText(text) {
    this.children = [];
    this.innerText = text;
    return this;
  }

  addEventListener(eventType, listener) {
    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = [];
    }
    this.eventListeners[eventType].push(listener);
    return this;
  }

  build() {
    const DOMthing = document.createElement(this.elementType);

    //  attributes
    for (const [attribute, value] of Object.entries(attributes)) {
      if (typeof value === 'boolean') {
        DOMthing.toggleAttribute(attribute, value);
      } else {
        DOMthing.setAttribute(attribute, value);
      }
    }

    //  event listeners
    for (const [ev, listeners] of Object.entries(this.eventListeners)) {
      listeners.forEach((listener) => {
        DOMthing.addEventListener(ev, listener);
      });
    }

    for (const [eventType, listeners] of Object.entries(this.eventListeners)) {
      listeners.forEach((listener) => {
        DOMthing.addEventListener(eventType, listener);
      });
    }

    // append children and text
    this.children.forEach((child) => {
      DOMthing.appendChild(child.build());
    });

    if (this.text === undefined) {
      for (const child of this.children) {
        DOMthing.appendChild(child.buildElement());
      }
    } else {
      const DOMtext = document.createTextNode(this.text);
      DOMthing.appendChild(DOMtext);
    }

    return DOMthing;
  }
}

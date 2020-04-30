"use strict"
class Storage {
  constructor(items) {
    this.items=items
  }

  getItems() {
    return this.items
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
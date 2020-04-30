"use strict"
class Car {
  constructor(parameters) {
    this.speed = 0;
    this._price = parameters.price;
    this.maxSpeed = parameters.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`)
  }

  get price() {
    return this._price
  }

  set price(value) {
    this._price = value
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed = ((this.speed + value) < this.maxSpeed) ? this.speed + value : this.maxSpeed;
  }

  decelerate(value) {
    this.speed = ((this.speed - value) > 0) ? this.speed - value : 0;
  }

  drive(hours) {
    this.distance = (this.isOn) ? this.speed * hours : this.distance;
  }
}
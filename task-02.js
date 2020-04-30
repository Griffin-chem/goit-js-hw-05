"use strict"
class User {
  constructor(obj) {
    this.name=obj.name;
    this.age=obj.age;
    this.followers=obj.followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
  }
}
class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk Status: ${
      this.isTrunkOpen ? `open` : `closed`
    }`);
  }

  go() {
    if (this.speed < 196 && !this.isTrunkOpen) {
      this.speed += 5;
    }
  }

  brake() {
    if (this.speed > 4) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

// const car1 = new Car({
//   brand: 'Toyota',
//   model: 'Corolla'
// });
// // const car2 = new Car({
// //   brand: 'Tesla',
// //   model: 'Model 3'
// // });

// // console.log(car1);
// // console.log(car2);

// // car1.displayInfo();
// // car2.displayInfo();

// car1.go();
// car1.displayInfo();
// car1.go();
// car1.displayInfo();
// car1.brake();
// car1.displayInfo();
// car1.brake();
// car1.displayInfo();
// car1.brake();
// car1.displayInfo();
// car1.go();
// car1.displayInfo();
// car1.go();
// car1.go();
// car1.openTrunk();
// car1.displayInfo();
// car1.brake();
// car1.brake();
// car1.brake();
// car1.openTrunk();
// car1.displayInfo();
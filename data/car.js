class Car {
  brand;
  model;
  speed = 0;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }

  go() {
    if (this.speed < 196) {
      this.speed += 5;
    }
  }

  brake() {
    if (this.speed > 4) {
      this.speed -= 5;
    }
  }
}

// const car1 = new Car({
//   brand: 'Toyota',
//   model: 'Corolla'
// });
// const car2 = new Car({
//   brand: 'Tesla',
//   model: 'Model 3'
// });

// console.log(car1);
// console.log(car2);

// car1.displayInfo();
// car2.displayInfo();

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
// car1.displayInfo();

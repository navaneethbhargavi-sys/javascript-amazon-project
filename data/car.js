class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk Status: ${
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

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);

    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  // Race cars do not have a trunk
  openTrunk() {
    console.log('Race cars do not have a trunk');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk');
  }
}

const racecar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

// racecar1.openTrunk();
// racecar1.displayInfo();
// racecar1.go();
// racecar1.displayInfo();
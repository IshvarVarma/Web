class Animal {
	name: string;
	
	constructor(name: string) {
	  this.name = name;
	}
	
	move(distanceInMeters: number = 0) {
	  console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
  }
  
  class Mammal extends Animal {
	giveBirth() {
	  console.log(`${this.name} gave birth.`);
	}
  }
  
  class Dog extends Mammal {
	bark() {
	  console.log('Woof! Woof!');
	}
  }
  
  const dog = new Dog('Rover');
  dog.bark(); // Output: Woof! Woof!
  dog.giveBirth(); // Output: Rover gave birth.
  dog.move(10); // Output: Rover moved 10m.
  
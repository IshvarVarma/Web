class City {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    getCityName() {
      console.log(`Name of the city is ${this.name}`);
    }
  }
  
  class CapitalCity extends City {
    capitalOf: string;
  
    constructor(name: string, capitalOf: string) {
      super(name);
      this.capitalOf = capitalOf;
    }
  
    getCapitalOf() {
      console.log(`${this.name} is the capital of ${this.capitalOf}`);
    }
  }
  
  class Suburb extends City {
    population: number;
  
    constructor(name: string, population: number) {
      super(name);
      this.population = population;
    }
  
    getPopulation() {
      console.log(`${this.name} has a population of ${this.population}`);
    }
  }
  
  let newYork = new CapitalCity("New York City", "United States");
  newYork.getCityName();
  newYork.getCapitalOf();
  
  let dubai = new CapitalCity("Dubai", "United Arab Emirates");
  dubai.getCityName();
  dubai.getCapitalOf();
  
  let bandra = new Suburb("Bandra", 150000);
  bandra.getCityName();
  bandra.getPopulation();
  
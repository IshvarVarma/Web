//npm install -g typescript
interface Person {
    name: string;
    age: number;
    address?: string;
  }
  
  function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
    if (person.address) {
      console.log(`You live at ${person.address}.`);
    }
  }
  
  const john: Person = {
    name: 'John',
    age: 30,
    address: '123 Main St'
  };
  
  greet(john);
  //tsc
  //node
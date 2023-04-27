function calculator(num1: number, num2: number, operator: string): number {
    let result = 0;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        throw new Error("Invalid operator");
    }
  
    return result;
  }
  
  console.log(calculator(4, 2, "+")); // Output: 6
  console.log(calculator(4, 2, "-")); // Output: 2
  console.log(calculator(4, 2, "*")); // Output: 8
  console.log(calculator(4, 2, "/")); // Output: 2
  
//npm install -g typescript
//tsc calculator.ts
//node calculator.js
//npm install typescript --save-dev
// tsconfig.json
const message: string = 'Hello, TypeScript!';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.createElement('div');
  element.textContent = message;
  document.body.appendChild(element);
});
//tsc index.ts
//node index.js
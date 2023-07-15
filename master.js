document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.getElementById('input-form');
    const inputExpression = document.getElementById('input-expression');
    const outputElement = document.getElementById('output');
  
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const expression = inputExpression.value;
      const result = evaluateExpression(expression);
  
      outputElement.textContent = `Output: ${result}`;
    });
  
    const evaluateExpression = (expression) => {
      // Function definitions
      function zero(operation) {
        if (!operation) return 0;
        return operation(0);
      }
  
      function one(operation) {
        if (!operation) return 1;
        return operation(1);
      }
  
      function two(operation) {
        if (!operation) return 2;
        return operation(2);
      }
  
      function three(operation) {
        if (!operation) return 3;
        return operation(3);
      }
  
      function four(operation) {
        if (!operation) return 4;
        return operation(4);
      }
  
      function five(operation) {
        if (!operation) return 5;
        return operation(5);
      }
  
      function six(operation) {
        if (!operation) return 6;
        return operation(6);
      }
  
      function seven(operation) {
        if (!operation) return 7;
        return operation(7);
      }
  
      function eight(operation) {
        if (!operation) return 8;
        return operation(8);
      }
  
      function nine(operation) {
        if (!operation) return 9;
        return operation(9);
      }
  
      function plus(num) {
        return function (value) {
          return value + num;
        };
      }
  
      function minus(num) {
        return function (value) {
          return value - num;
        };
      }
  
      function times(num) {
        return function (value) {
          return value * num;
        };
      }
  
      function divided_by(num) {
        return function (value) {
          return Math.floor(value / num);
        };
      }
  
      // Evaluate the expression
      const result = eval(expression);
  
      return result;
    };
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll(".btn");
    let expression = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = button.innerText;
  
        if (buttonText === "AC") {
          expression = "";
        } else if (buttonText === "C") {
          expression = expression.slice(0, -1);
        } else if (buttonText === "=") {
          try {
            expression = eval(expression).toString();
          } catch (error) {
            expression = "Error";
          }
        } else {
          expression += buttonText;
        }
  
        inputBox.value = expression;
      });
    });
  });  
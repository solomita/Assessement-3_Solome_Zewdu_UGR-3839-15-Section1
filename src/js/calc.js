document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = null;
    let operand1 = null;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (button.id === "clear") {
                // Clear display and reset variables
                currentInput = "";
                operator = null;
                operand1 = null;
                display.value = "";
            } else if (button.id === "equals") {
                // Perform calculation
                if (operand1 !== null && operator !== null && currentInput !== "") {
                    const operand2 = parseFloat(currentInput);
                    let result;

                    switch (operator) {
                        case "+":
                            result = operand1 + operand2;
                            break;
                        case "-":
                            result = operand1 - operand2;
                            break;
                        case "*":
                            result = operand1 * operand2;
                            break;
                        case "/":
                            result = operand2 !== 0 ? operand1 / operand2 : "Error";
                            break;
                    }

                    display.value = result;
                    currentInput = "";
                    operator = null;
                    operand1 = null;
                }
            } else if (button.classList.contains("operator")) {
                // Store operator and operand
                if (currentInput !== "") {
                    operand1 = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else {
                // Update input and display
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});

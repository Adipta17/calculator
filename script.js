const screen = document.getElementById("screen");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            screen.value = "";
        }

        else if (value === "DEL") {
            screen.value = screen.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        }

        else {
            screen.value += value;
        }
    });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (
        (key >= "0" && key <= "9") ||
        ["+", "-", "*", "/", ".", "%"].includes(key)
    ) {
        screen.value += key;
    }

    else if (key === "Enter") {
        try {
            screen.value = eval(screen.value);
        } catch {
            screen.value = "Error";
        }
    }

    else if (key === "Backspace") {
        screen.value = screen.value.slice(0, -1);
    }

    else if (key === "Escape") {
        screen.value = "";
    }
});

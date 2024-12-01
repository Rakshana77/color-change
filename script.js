 function changeColor(color) {
        const circle = document.getElementById("circle");
        circle.style.backgroundColor = color;
      }

      function resetColor() {
        const circle = document.getElementById("circle");
        circle.style.backgroundColor = "whitesmoke";
      }

      const circle = document.getElementById("circle");
      const text = document.getElementById("text");

      text.addEventListener("change", () => {
        circle.style.backgroundColor = text.value;
      });

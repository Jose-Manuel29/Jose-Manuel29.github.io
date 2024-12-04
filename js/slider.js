(function () {
    const sliders = [...document.querySelectorAll(".testimony__body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;
  
    if (!buttonNext || !buttonBefore || sliders.length === 0) {
      console.error("Faltan elementos en el DOM o no hay testimonios disponibles.");
      return;
    }
  
    buttonNext.addEventListener("click", () => {
      changePosition(1);
    });
  
    buttonBefore.addEventListener("click", () => {
      changePosition(-1);
    });
  
    const changePosition = (add) => {
      const currentTestimony = document.querySelector(".testimony__body--show");
      if (!currentTestimony) {
        console.error("No se encontró un elemento con la clase testimony__body--show.");
        return;
      }
  
      const currentId = Number(currentTestimony.dataset.id);
      value = currentId + add;
  
      if (value > sliders.length) {
        value = 1; // Volver al primero
      } else if (value < 1) {
        value = sliders.length; // Ir al último
      }
  
      currentTestimony.classList.remove("testimony__body--show");
      sliders[value - 1].classList.add("testimony__body--show");
    };
  })();
  
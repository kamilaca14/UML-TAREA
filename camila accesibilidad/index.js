window.onload = () => {
  // Agregar tabindex="0" a los elementos relevantes
  document.querySelector(".arrow-right").setAttribute("tabindex", "0");
  document.querySelector(".arrow-left").setAttribute("tabindex", "0");
  document.querySelector(".send-button").setAttribute("tabindex", "0");
  document.querySelectorAll(".project").forEach(element => {
    element.setAttribute("tabindex", "0");
  });

  // Agregar role="button" a los elementos relevantes
  document.querySelector(".arrow-right").setAttribute("role", "button");
  document.querySelector(".arrow-left").setAttribute("role", "button");
  document.querySelector(".send-button").setAttribute("role", "button");
  document.querySelectorAll(".project").forEach(element => {
    element.setAttribute("role", "button");
  });

  // Agregar aria-label a los elementos relevantes
  document.querySelector(".arrow-right").setAttribute("aria-label", "Siguiente proyecto");
  document.querySelector(".arrow-left").setAttribute("aria-label", "Proyecto anterior");
  document.querySelector(".send-button").setAttribute("aria-label", "Enviar formulario");
  document.querySelectorAll(".project").forEach(element => {
    element.setAttribute("aria-label", "Abrir modal");
  });

  // Funciones de navegación
  function clickRight() {
    const currentLeft = parseInt(
      getComputedStyle(document.querySelector(".project-container")).left,
      10
    );
    if (currentLeft < -270) {
      return;
    }
    let newValue = currentLeft - 270;
    //270 toma en cuenta el tamaño de la imagen mas sus margines
    document.querySelector(".project-container").style.left = newValue + "px";
  }

  function clickLeft() {
    const currentLeft = parseInt(
      getComputedStyle(document.querySelector(".project-container")).left,
      10
    );
    if (currentLeft === 0) {
      //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
      return;
    }
    let newValue = currentLeft + 270;
    document.querySelector(".project-container").style.left = newValue + "px";
  }

  // Funciones de formulario
  function showNotification() {
    document.querySelector(".notification").style.display = "flex";
    setTimeout(function() {
      document.querySelector(".notification").style.display = "none";
    }, 3000);
  }

  // Funciones de modal
  function openModal(e) {
    document.querySelector(".modal-container").style.display = "flex";
  }

  // Funciones de click

  // Agregar eventos de click a los botones de flecha
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);

  // Agregar eventos de keydown a los proyectos
  document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        openModal(e); // Abre el modal al presionar Enter en un proyecto
      }
    });
  });

  // Cerrar el modal con Escape
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      document.querySelector(".modal-container").style.display = "none";
    }
  });
};
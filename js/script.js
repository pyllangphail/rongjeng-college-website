// CONTACT FORM SUBMIT

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact-form form");

  if(form){

    form.addEventListener("submit", function(event){

      event.preventDefault();

      // GET INPUT VALUES

      const name =
        form.querySelector('input[type="text"]').value.trim();

      const email =
        form.querySelector('input[type="email"]').value.trim();

      const subject =
        form.querySelectorAll('input[type="text"]')[1].value.trim();

      const message =
        form.querySelector("textarea").value.trim();

      // SIMPLE VALIDATION

      if(
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
      ){

        alert(
          "Please fill in all fields."
        );

        return;
      }

      // EMAIL VALIDATION

      const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(!email.match(emailPattern)){

        alert(
          "Please enter a valid email address."
        );

        return;
      }

      // SUCCESS MESSAGE

      alert(
        "Thank you! Your feedback/message has been submitted successfully."
      );

      // RESET FORM

      form.reset();

    });

  }

});
// ACCESSIBILITY FEATURES

let currentScale = 1;

// INCREASE TEXT

function increaseText(){

  currentScale += 0.1;

  document.documentElement.style.fontSize =
    currentScale + "em";
}

// DECREASE TEXT

function decreaseText(){

  if(currentScale > 0.7){

    currentScale -= 0.1;

    document.documentElement.style.fontSize =
      currentScale + "em";
  }
}

// HIGH CONTRAST

function toggleContrast(){

  document.body.classList.toggle(
    "high-contrast"
  );
}

// GRAYSCALE

function toggleGrayscale(){

  document.body.classList.toggle(
    "grayscale"
  );
}

// HIGHLIGHT LINKS

function highlightLinks(){

  document.body.classList.toggle(
    "highlight-links"
  );
}

// RESET

function resetAccessibility(){

  currentFontSize = 100;

  document.body.style.fontSize = "100%";

  document.body.classList.remove(
    "high-contrast"
  );

  document.body.classList.remove(
    "grayscale"
  );

  document.body.classList.remove(
    "highlight-links"
  );
}
// IMAGE POPUP GALLERY

let zoomLevel = 1;

// OPEN MODAL

function openModal(image){

  const modal =
    document.getElementById("imageModal");

  const popupImage =
    document.getElementById("popupImage");

  modal.style.display = "flex";

  popupImage.src = image.src;

  zoomLevel = 1;

  popupImage.style.transform =
    "scale(1)";
}

// CLOSE MODAL

document.addEventListener("DOMContentLoaded", () => {

  const modal =
    document.getElementById("imageModal");

  const closeModal =
    document.querySelector(".close-modal");

  if(closeModal){

    closeModal.onclick = function(){

      modal.style.display = "none";
    };
  }

  // CLOSE WHEN CLICK OUTSIDE

  window.onclick = function(event){

    if(event.target === modal){

      modal.style.display = "none";
    }
  };

});

// ZOOM IN

function zoomIn(){

  const popupImage =
    document.getElementById("popupImage");

  zoomLevel += 0.2;

  popupImage.style.transform =
    `scale(${zoomLevel})`;
}

// ZOOM OUT

function zoomOut(){

  const popupImage =
    document.getElementById("popupImage");

  if(zoomLevel > 0.5){

    zoomLevel -= 0.2;

    popupImage.style.transform =
      `scale(${zoomLevel})`;
  }
}
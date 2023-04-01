

  var bgImage = document.getElementById("backgroundimage1");
		bgImage.addEventListener("mouseover", function() {
			bgImage.style.animation = "none";
			bgImage.offsetHeight; // trigger reflow
			bgImage.style.animation = "shake 0.5s infinite linear";
		});
    

    function setScheme(scheme) {
  const body = document.querySelector("body");

  switch (scheme) {
    case "scheme1":
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
      break;
    case "scheme2":
      body.style.backgroundColor = "#000";
      body.style.color = "#fff";
      break;
    case "scheme3":
      body.style.backgroundColor = "#ff0";
      body.style.color = "#f00";
      break;
    default:
      console.error("Invalid scheme: " + scheme);
  }
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the input values from the form
  const name = form.querySelector('#name').value;
  const message = form.querySelector('#message').value;

  // Show a message to the user
  alert(`Thank you, ${name}! Your comments have been recorded: ${message}`);

});


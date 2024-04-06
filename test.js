

  // function to run when clicked on the button with data-button='value'
  const buttonClickHandler = (event) => {
    // Hide the button with data-disable-button='value'
    const disableButton = document.querySelector(`[data-disable-button='value']`);
    if (disableButton) {
      disableButton.style.display = 'none'; // Hide the button
    }
    
    // Log to console that button is clicked
    console.log("Button clicked");

    // Optionally, you can remove the event listener if needed
    event.target.removeEventListener("click", buttonClickHandler);
  };

  // Select the button with data-button='value' and add click event listener
  const button = document.querySelector(`[data-button='value']`);
  if (button) {
    button.addEventListener("click", buttonClickHandler);
  }

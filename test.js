function initializeFeature() {
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('[data-my-feature]');
    elements.forEach(el => {
      const featureType = el.getAttribute('data-my-feature');
      // Initialize different functionalities based on the featureType
      if (featureType === 'modal') {
        // Initialize modal functionality
      } else if (featureType === 'disable-section') {
        // Add click event listener to buttons meant to disable sections
        el.addEventListener('click', function() {
          // Find the section to hide
          const sectionToHide = document.querySelector('[data-test-hide-section="true"]');
          // Optionally hide the section or take other actions
          // sectionToHide.style.display = 'none'; // Uncomment to hide the section
          
          // Disable the button
          el.disabled = true;
        });
      }
    });
  });
}

// Extend the data-my-feature with a new featureType 'disable-section'
// Ensure your HTML button has data-my-feature="disable-section" instead of data-test-button="true"
// Example: <button data-my-feature="disable-section">Disable Section</button>

// Call the function to initialize features
initializeFeature();


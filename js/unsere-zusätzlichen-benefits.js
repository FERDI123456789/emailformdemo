document.addEventListener("DOMContentLoaded", () => {
    const benefitRows = document.querySelectorAll(".benefit-row");
    
    // Function to display a benefit row after a delay
    function displayBenefitRow(row, delay) {
      setTimeout(() => {
        row.style.display = "flex";
        setTimeout(() => {
          row.style.opacity = 1;
        }, 50); // Slight delay to trigger CSS transition
      }, delay);
    }
  
    // Loop through each row and set a delay for displaying
    benefitRows.forEach((row, index) => {
      displayBenefitRow(row, index * 2000); // 2 second delay between each row
    });
  });
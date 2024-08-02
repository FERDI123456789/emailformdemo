document.addEventListener("DOMContentLoaded", () => {
    const benefitRows = document.querySelectorAll(".benefit-row");
    
    // Function to display a benefit row after a delay
    function displayBenefitRow(row, delay) {
      setTimeout(() => {
        row.style.display = "flex";
        setTimeout(() => {
          row.style.opacity = 1;
        }, 2000); // Slight delay to trigger CSS transition
      }, delay);
    }
  
    // Loop through each row and set a delay for displaying
    benefitRows.forEach((row, index) => {
      displayBenefitRow(row, index * 2000); // 2 second delay between each row
    });
  });

  const docExplain = document.getElementById('doc-explain');
  document.addEventListener('DOMContentLoaded', () => {setTimeout(() => {docExplain.style.opacity = 1;}, 1000)})

  const miteinander = document.getElementById('miteinander');
  document.addEventListener('DOMContentLoaded', () => {setTimeout(() => {miteinander.style.top = 220 +'px';}, 1500)})
  document.addEventListener('DOMContentLoaded', () => {setTimeout(() => {miteinander.style.opacity = 1;}, 1500)})
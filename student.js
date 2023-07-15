document.addEventListener('DOMContentLoaded', () => {
    const calculationLog = document.getElementById('calculation-log');
  
    // Fetch calculation log
    const fetchCalculationLog = async () => {
      const response = await fetch('/api/calculation-log');
      const data = await response.json();
  
      data.forEach(calculation => {
        const listItem = document.createElement('li');
        listItem.textContent = `Calculation: ${calculation.expression}, Result: ${calculation.result}, Performed by: ${calculation.master}`;
        calculationLog.appendChild(listItem);
      });
    };
  
    // Fetch calculation log on page load
    fetchCalculationLog();
  });
  
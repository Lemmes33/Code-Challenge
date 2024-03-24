// Function to calculate payee (tax) based on provided tax rates
function calculatePayee(basicSalary) {
    // Implement tax calculation logic using tax rates from KRA website or user input
    // ... return the calculated payee amount
  }
  
  // Function to calculate NHIF deductions based on provided rate
  function calculateNHIFDeductions(basicSalary) {
    const NHIFRate = 0.05; // Replace with actual NHIF rate
    return basicSalary * NHIFRate;
  }
  
  // Function to calculate NSSF deductions based on provided rate and salary cap
  function calculateNSSFDeductions(basicSalary) {
    const NSSFRate = 0.06; // Replace with actual NSSF rate
    const salaryCap = 18000; // Replace with actual NSSF salary cap
    return Math.min(basicSalary * NSSFRate, salaryCap); // Limit deductions to salary cap
  }
  
  // Main calculation logic
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(basicSalary);
    const NHIFDeductions = calculateNHIFDeductions(basicSalary);
    const NSSFDeductions = calculateNSSFDeductions(basicSalary);
    const netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  
    return {
      grossSalary,
      payee,
      NHIFDeductions,
      NSSFDeductions,
      netSalary
    };
  }
  // Example usage
const basicSalary = 100000;
const benefits = 5000;

const salaryInfo = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryInfo.grossSalary);
console.log("Payee (Tax):", salaryInfo.payee);
console.log("NHIF Deductions:", salaryInfo.NHIFDeductions);
console.log("NSSF Deductions:", salaryInfo.NSSFDeductions);
console.log("Net Salary:", salaryInfo.netSalary);

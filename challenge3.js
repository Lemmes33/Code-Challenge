// Function to calculate payee (tax) based on provided tax rates
function calculatePayee(basicSalary) {
  if (basicSalary <= 24000) {
    return basicSalary * 0.1;
    if (grossSalary <= 24000) {
      return basicSalary * 0.1;
    } else if (basicSalary <= 32333) {
      0.25 * (basicSalary - 24000);
    } else if (basicSalary <= 500000) {
      0.3 * (basicSalary - 32333);
    } else if (basicSalary <= 800000) {
      0.325 * (basicSalary - 500000);
    } else if (basicSalary > 800000);
    {
      return basicSalary * 0.35;
    }
  }
}

// Function to calculate NHIF deductions based on provided rate
function calculateNHIFDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1400;
  } else if (grossSalary <= 89999) {
    return 1500;
  }else if (grossSalary <= 99999) {
    return 1600;
} else {
    return 1700;
}
}

// Function to calculate NSSF deductions based on provided rate and salary cap
function calculateNSSFDeductions(basicSalary) {
  const NSSFRate = 0.06;
  const salaryCap = 18000;
  return Math.min(basicSalary * NSSFRate, salaryCap);
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
    netSalary,
  };
}
const basicSalary = 100000;
const benefits = 5000;

const salaryInfo = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryInfo.grossSalary);
console.log("Payee (Tax):", salaryInfo.payee);
console.log("NHIF Deductions:", salaryInfo.NHIFDeductions);
console.log("NSSF Deductions:", salaryInfo.NSSFDeductions);
console.log("Net Salary:", salaryInfo.netSalary);
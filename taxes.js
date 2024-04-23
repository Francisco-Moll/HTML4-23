let tax_percent = 0.23;
let income = 32522.35;
let taxes = 0;

taxes = income * tax_percent;

taxes = parseFloat(taxes.toFixed(2));

console.log(taxes);
let salary = prompt("Enter salary");

while (salary > 10000) {
  console.log(`sorry the salary amount ${salary} is too high`);
  salary = prompt("Enter new salary");
  if (salary <= 10000) {
  }
}

if (salary <= 10000) {
  function percentage(salaryAmount) {
    if (salaryAmount <= 2000) {
      return 15;
    } else if (salaryAmount > 2000 && salaryAmount <= 4000) {
      return 20;
    } else if (salaryAmount > 4000 && salaryAmount <= 6000) {
      return 25;
    } else if (salaryAmount > 6000 && salaryAmount <= 8000) {
      return 30;
    } else if (salaryAmount > 8000 && salaryAmount <= 10000) {
      return 35;
    }
  }

  console.log(percentage(salary));

  const question = prompt(
    `Would you like to know your tax amount figure with regards to the ${percentage(
      salary
    )} yes/no)`
  ).toLowerCase();
  question === "yes"
    ? console.log(`Your salary is ${salary}$, your tax percentage is ${percentage(
        salary
      )}% and your tax amount is
    ${(percentage(salary) / 100) * salary}$`)
    : console.log("Thanks for using our services");
}
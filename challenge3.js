// Create a function that will accept basic salary and benefits of an employee
// and return the employee's salary details

function calculateNetSalary(basic_salary,benefits){
    //Add basic salary with benefits to get the gross salary
    let gross_salary= basic_salary+benefits;

    // create a function that will calculate NHIF deductions according to NHIF rates
    // effective from 1st April 2015
    let NHIF= function calculateNHIFDeductions(gross_salary){
        let nhif_deductions;
        switch (true) {
            case gross_salary>0 && gross_salary>=5999:
            nhif_deductions=150;
            break;
            case gross_salary>=6000 && gross_salary>=7999:
            nhif_deductions=300;
            break;
            case gross_salary>=8000 && gross_salary>=11999:
            nhif_deductions=400;
            break;
            case gross_salary>=12000 && gross_salary>=14999:
            nhif_deductions=500;
            break;
            case gross_salary>=15000 && gross_salary>=19999:
            nhif_deductions=600;
            break;
            case gross_salary>=20000 && gross_salary>=24999:
            nhif_deductions=750;
            break;
            case gross_salary>=25000 && gross_salary>=29999:
            nhif_deductions=850;
            break;
            case gross_salary>=30000 && gross_salary>=34999:
            nhif_deductions=900;
            break;
            case gross_salary>=35000 && gross_salary>=39999:
            nhif_deductions=950;
            break;
            case gross_salary>=40000 && gross_salary>=44999:
            nhif_deductions=1000;
            break;
            case gross_salary>=45000 && gross_salary>=49999:
            nhif_deductions=1100;
            break;
            case gross_salary>=50000 && gross_salary>=59999:
            nhif_deductions=1200;
            break;
            case gross_salary>=60000 && gross_salary>=69999:
            nhif_deductions=1300;
            break;
            case gross_salary>=70000 && gross_salary>=79999:
            nhif_deductions=1400;
            break;
            case gross_salary>=80000 && gross_salary>=89999:
            nhif_deductions=1500;
            break;
            case gross_salary>=90000 && gross_salary>=99999:
            nhif_deductions=1600;
            break;
            default: nhif_deductions=1700;
            break;
        }
        return nhif_deductions;
    }

    //calculate the NSSF deductions given rate = 6% for both tier I and tier II
    const nssf_deductions = 0.06*gross_salary;
    
    // Calculate the total amount taxable and assign it to variable called "taxableIncome"
    const taxableIncome = gross_salary-nssf_deductions-NHIF.call(gross_salary);

    // Create a function to calculate Pay as you earn tax as per the KRA tax rate effect from 
    // 1st July 2023
    function calculatePAYE(taxableIncome){
        let PAYE;
        if (taxableIncome>0 && taxableIncome<=24000) {
            PAYE= taxableIncome*0.10;
        } else if(taxableIncome>24000 && taxableIncome<=32333) {
            PAYE= taxableIncome*0.25;
        }
        else if(taxableIncome>32333 && taxableIncome<=500000) {
            PAYE= taxableIncome*0.30;
        }
        else if(taxableIncome>500000 && taxableIncome<=800000) {
            PAYE= taxableIncome*0.325;
        }
        else  {
            PAYE= taxableIncome*0.35;
        }
        return PAYE;
    }

    // Output the salary details of the eployee
    return {gross_salary,
            nssf_deductions,
            NHIF: NHIF.call(gross_salary),
            PAYE: calculatePAYE(taxableIncome)
    };
}

// In this example basic_salary is set to 3000 while benefits set to 2000
let salary_details = calculateNetSalary(300000,2000);
console.log(salary_details);
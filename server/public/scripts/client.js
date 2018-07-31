let empList = [];

let monthlySalary = 0;

const totalMontlyCost = 20000;

$('document').ready(readyNow);

class Employee {
    constructor(firstName, lastName, employeeId, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } //end constructor
} //end class Employee



function readyNow() {
    $('.addIn').on('click', inputVals);
    $('.displayInfo').on('click','.removeEmp', deleteEmp);
} //end readyNow

function inputVals() {
    //Store input value in array
    empDataInfo = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#empIdIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());
    empList.push(empDataInfo);
    console.log(empList);
    //append employees info to Dom
    let dataDisplay = $('.displayInfo');
    dataDisplay.empty();
    for (let empInfo of empList) {
        let inputInfo = $('<tr class="infoAp"></tr>')
        inputInfo.append(`<td>${empInfo.firstName}</td>
        <td class="inName">${empInfo.lastName}</td>
        <td class="inLast">${empInfo.employeeId}</td>
        <td class="inId">${empInfo.jobTitle}</td>
        <td class="inSal">${empInfo.annualSalary}</td>`);
        //add remove button to each entery
        inputInfo.append('<td><button class="btn btn-warning removeEmp">Remove</button></td>');
        dataDisplay.append(inputInfo);
    } //end for of
    //empty input fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#empIdIn').val('');
    $('#jobTitleIn').val('');
    $('#salaryIn').val('');
    salaryCalc();
} //end inputVals

function salaryCalc() {
    //take annual values & calcuate
    for (let staff of empList) {
        monthlySalary += (staff.annualSalary / 12);
        console.log(monthlySalary);
        if (monthlySalary <= totalMontlyCost) {
            console.log('within budget');
            $('.monthlyCost').css('text-color', 'green');
        } else if (monthlySalary > totalMontlyCost) {
            console.log('expenses exceede budget');
            //if salary val exceeds total budget
            //highlight total cost red
            $('.monthlyCost').css('background-color', 'red');
        } //end else if
    } //end for of
    //append total monthlySalary to Dom
    let monthlyCostData = $('.monthlyCost');
    monthlyCostData.empty();
    monthlyCostData.append(monthlySalary.toFixed(2));
} //end salaryCalc

function deleteEmp() {
    //need rework
    //target DOM remove name
    $(this).parent().parent().remove();
    for (let edit of empList) {
        //subtract annualSalary from montlySalary
        monthlySalary -= (edit.annualSalary / 12);
        console.log(monthlySalary);
    } //end for of
    let deleteMonthlyCost = $('.monthlyCost');
    deleteMonthlyCost.empty();
    deleteMonthlyCost.append(monthlySalary.toFixed(2));
} //end deleteEmp

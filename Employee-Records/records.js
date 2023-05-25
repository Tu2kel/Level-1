// function employee(name, jobTitle, salary, status) {
//   this.name = name;
//   this.jobTitle = jobTitle;
//   this.salary = salary;
//   this.status = status;
// }


// THE EMPTY ARRAY
var employees = {
  Name: "",
  JobTitle: "",
  Salary: 0,
  Status: "Full Time",
  Form: function printEmployeeForm() {
    // console.log("Name: " + this.Name + " JobTitle: " + this.JobTitle + " Salary: " + this.Salary + " Status: " + this.Status);
    
  },
  
};


// THE CONSTRUCTOR
function Employee(Status) {
//   this.Name = Name;
//   this.JobTitle = JobTitle;
//   this.Salary = Salary;
  this.Status = Status;
// printEmployeeForm()
}

// THE INSTANTIATOR 
var theEmployee = new Employee ("Part Time Playa")
// printEmployeeForm();
console.log(theEmployee); 
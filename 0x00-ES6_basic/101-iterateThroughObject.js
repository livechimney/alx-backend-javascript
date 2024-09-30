import createEmployeesObject from "./11-createEmployeesObject";

export default function iterateThroughObject(reportWithIterator) {
	    const employees = [];

	    for (const employee of reportWithIterator) {
		            createEmployeesObject.push(employee);
		        }
	    return employees.join(' | ');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = void 0;
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to teacher tasks'; };
    }
    return Teacher;
}());
var createEmployee = function (salary) { return Number(salary) < 500 ? new Teacher() : new Director(); };
exports.createEmployee = createEmployee;
var isDirector = function (employee) { return employee instanceof Director; };
exports.isDirector = isDirector;
var executeWork = function (employee) {
    var work = employee instanceof Teacher ? employee.workTeacherTasks() : employee.workDirectorTasks();
    console.log(work);
};
exports.executeWork = executeWork;
var teachClass = function (todayClass) {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};
exports.teachClass = teachClass;

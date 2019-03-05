import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TodoService } from './../services/todo.service';
var PatientLoginPage = /** @class */ (function () {
    function PatientLoginPage(todoService) {
        this.todoService = todoService;
        this.customActionSheetOptionsClinic = {
            header: 'Clinic',
            subHeader: 'Select your Clinic'
        };
        this.customActionSheetOptionsTherapist = {
            header: 'Therapist',
            subHeader: 'Select your Therapist'
        };
    }
    PatientLoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (res) {
            _this.todos = res;
        });
    };
    PatientLoginPage.prototype.remove = function (item) {
        this.todoService.removeTodo(item.id);
    };
    PatientLoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-patient-login',
            templateUrl: './patient-login.page.html',
            styleUrls: ['./patient-login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TodoService])
    ], PatientLoginPage);
    return PatientLoginPage;
}());
export { PatientLoginPage };
//# sourceMappingURL=patient-login.page.js.map
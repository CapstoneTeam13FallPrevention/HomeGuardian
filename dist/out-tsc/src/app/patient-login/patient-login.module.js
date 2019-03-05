import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PatientLoginPage } from './patient-login.page';
var routes = [
    {
        path: '',
        component: PatientLoginPage
    }
];
var PatientLoginPageModule = /** @class */ (function () {
    function PatientLoginPageModule() {
    }
    PatientLoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PatientLoginPage]
        })
    ], PatientLoginPageModule);
    return PatientLoginPageModule;
}());
export { PatientLoginPageModule };
//# sourceMappingURL=patient-login.module.js.map
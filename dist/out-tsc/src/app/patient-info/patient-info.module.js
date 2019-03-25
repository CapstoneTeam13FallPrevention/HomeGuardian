import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PatientInfoPage } from './patient-info.page';
var routes = [
    {
        path: '',
        component: PatientInfoPage
    }
];
var PatientInfoPageModule = /** @class */ (function () {
    function PatientInfoPageModule() {
    }
    PatientInfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PatientInfoPage]
        })
    ], PatientInfoPageModule);
    return PatientInfoPageModule;
}());
export { PatientInfoPageModule };
//# sourceMappingURL=patient-info.module.js.map
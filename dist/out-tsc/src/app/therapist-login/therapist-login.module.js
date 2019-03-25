import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TherapistLoginPage } from './therapist-login.page';
var routes = [
    {
        path: '',
        component: TherapistLoginPage
    }
];
var TherapistLoginPageModule = /** @class */ (function () {
    function TherapistLoginPageModule() {
    }
    TherapistLoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TherapistLoginPage]
        })
    ], TherapistLoginPageModule);
    return TherapistLoginPageModule;
}());
export { TherapistLoginPageModule };
//# sourceMappingURL=therapist-login.module.js.map
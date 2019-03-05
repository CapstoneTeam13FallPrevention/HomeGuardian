import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisclaimerPolicyPage } from './disclaimer-policy.page';
var routes = [
    {
        path: '',
        component: DisclaimerPolicyPage
    }
];
var DisclaimerPolicyPageModule = /** @class */ (function () {
    function DisclaimerPolicyPageModule() {
    }
    DisclaimerPolicyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DisclaimerPolicyPage]
        })
    ], DisclaimerPolicyPageModule);
    return DisclaimerPolicyPageModule;
}());
export { DisclaimerPolicyPageModule };
//# sourceMappingURL=disclaimer-policy.module.js.map
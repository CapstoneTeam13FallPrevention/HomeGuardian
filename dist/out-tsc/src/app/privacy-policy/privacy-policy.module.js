import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrivacyPolicyPage } from './privacy-policy.page';
var routes = [
    {
        path: '',
        component: PrivacyPolicyPage
    }
];
var PrivacyPolicyPageModule = /** @class */ (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PrivacyPolicyPage]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());
export { PrivacyPolicyPageModule };
//# sourceMappingURL=privacy-policy.module.js.map
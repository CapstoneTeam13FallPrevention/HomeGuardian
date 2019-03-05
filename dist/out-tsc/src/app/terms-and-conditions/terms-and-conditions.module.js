import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TermsAndConditionsPage } from './terms-and-conditions.page';
var routes = [
    {
        path: '',
        component: TermsAndConditionsPage
    }
];
var TermsAndConditionsPageModule = /** @class */ (function () {
    function TermsAndConditionsPageModule() {
    }
    TermsAndConditionsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TermsAndConditionsPage]
        })
    ], TermsAndConditionsPageModule);
    return TermsAndConditionsPageModule;
}());
export { TermsAndConditionsPageModule };
//# sourceMappingURL=terms-and-conditions.module.js.map
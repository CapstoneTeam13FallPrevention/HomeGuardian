import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisclaimerPage } from './disclaimer.page';
var routes = [
    {
        path: '',
        component: DisclaimerPage
    }
];
var DisclaimerPageModule = /** @class */ (function () {
    function DisclaimerPageModule() {
    }
    DisclaimerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DisclaimerPage]
        })
    ], DisclaimerPageModule);
    return DisclaimerPageModule;
}());
export { DisclaimerPageModule };
//# sourceMappingURL=disclaimer.module.js.map
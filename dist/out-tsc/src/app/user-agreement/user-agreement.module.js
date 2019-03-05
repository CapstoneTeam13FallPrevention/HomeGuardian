import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserAgreementPage } from './user-agreement.page';
var routes = [
    {
        path: '',
        component: UserAgreementPage
    }
];
var UserAgreementPageModule = /** @class */ (function () {
    function UserAgreementPageModule() {
    }
    UserAgreementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserAgreementPage]
        })
    ], UserAgreementPageModule);
    return UserAgreementPageModule;
}());
export { UserAgreementPageModule };
//# sourceMappingURL=user-agreement.module.js.map
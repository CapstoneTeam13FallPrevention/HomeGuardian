import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserTypePage } from './user-type.page';
var routes = [
    {
        path: '',
        component: UserTypePage
    }
];
var UserTypePageModule = /** @class */ (function () {
    function UserTypePageModule() {
    }
    UserTypePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserTypePage]
        })
    ], UserTypePageModule);
    return UserTypePageModule;
}());
export { UserTypePageModule };
//# sourceMappingURL=user-type.module.js.map
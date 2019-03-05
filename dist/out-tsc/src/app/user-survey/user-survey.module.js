import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserSurveyPage } from './user-survey.page';
var routes = [
    {
        path: '',
        component: UserSurveyPage
    }
];
var UserSurveyPageModule = /** @class */ (function () {
    function UserSurveyPageModule() {
    }
    UserSurveyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserSurveyPage]
        })
    ], UserSurveyPageModule);
    return UserSurveyPageModule;
}());
export { UserSurveyPageModule };
//# sourceMappingURL=user-survey.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CameraControlPage } from './camera-control.page';
var routes = [
    {
        path: '',
        component: CameraControlPage
    }
];
var CameraControlPageModule = /** @class */ (function () {
    function CameraControlPageModule() {
    }
    CameraControlPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CameraControlPage]
        })
    ], CameraControlPageModule);
    return CameraControlPageModule;
}());
export { CameraControlPageModule };
//# sourceMappingURL=camera-control.module.js.map
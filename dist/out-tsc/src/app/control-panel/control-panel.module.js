import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ControlPanelPage } from './control-panel.page';
var routes = [
    {
        path: '',
        component: ControlPanelPage
    }
];
var ControlPanelPageModule = /** @class */ (function () {
    function ControlPanelPageModule() {
    }
    ControlPanelPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ControlPanelPage]
        })
    ], ControlPanelPageModule);
    return ControlPanelPageModule;
}());
export { ControlPanelPageModule };
//# sourceMappingURL=control-panel.module.js.map
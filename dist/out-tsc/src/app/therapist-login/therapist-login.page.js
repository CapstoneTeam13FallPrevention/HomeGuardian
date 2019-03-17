import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TherapistLoginPage = /** @class */ (function () {
    function TherapistLoginPage() {
        this.customActionSheetOptionsClinic = {
            header: 'Clinic',
            subHeader: 'Select your Clinic'
        };
        this.customActionSheetOptionsTherapist = {
            header: 'Therapist',
            subHeader: 'Select your Therapist'
        };
    }
    TherapistLoginPage.prototype.ngOnInit = function () {
    };
    TherapistLoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-therapist-login',
            templateUrl: './therapist-login.page.html',
            styleUrls: ['./therapist-login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TherapistLoginPage);
    return TherapistLoginPage;
}());
export { TherapistLoginPage };
//# sourceMappingURL=therapist-login.page.js.map
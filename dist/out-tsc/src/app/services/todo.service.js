import * as tslib_1 from "tslib";
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
var TodoService = /** @class */ (function () {
    function TodoService(db) {
        this.customActionSheetOptionsClinic = {
            header: 'Clinic',
            subHeader: 'Select your Clinic'
        };
        this.customActionSheetOptionsTherapist = {
            header: 'Therapist',
            subHeader: 'Select your Therapist'
        };
        this.patientinformationCollection = db.collection('todos');
        this.todos = this.patientinformationCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
    }
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.getTodo = function (id) {
        return this.patientinformationCollection.doc(id).valueChanges();
    };
    TodoService.prototype.updateTodo = function (todo, id) {
        return this.patientinformationCollection.doc(id).update(todo);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.patientinformationCollection.add(todo);
    };
    TodoService.prototype.removeTodo = function (id) {
        return this.patientinformationCollection.doc(id).delete();
    };
    TodoService.prototype.ngOnInit = function () {
    };
    TodoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], TodoService);
    return TodoService;
}());
export { TodoService };
//# sourceMappingURL=todo.service.js.map
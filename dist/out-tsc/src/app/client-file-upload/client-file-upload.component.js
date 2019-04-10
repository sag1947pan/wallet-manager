import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
var URL = 'https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers';
var ClientFileUploadComponent = /** @class */ (function () {
    function ClientFileUploadComponent() {
        this.uploader = new FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            alert('File uploaded successfully');
        };
    }
    ClientFileUploadComponent.prototype.ngOnInit = function () {
    };
    ClientFileUploadComponent.prototype.fileOverBase = function (e) {
        debugger;
        this.hasBaseDropZoneOver = e;
    };
    ClientFileUploadComponent.prototype.handleFileInput = function (files) {
        debugger;
        var ext = (files.item(0).name).split('.')[1];
        if ((ext == 'xlsx') || (ext == 'xls') || (ext == 'csv') || (ext == 'xml') || (ext == 'json')) {
        }
        else {
            alert("File Format not Supported.");
            this.uploader.queue.splice(-1);
            return;
        }
    };
    ClientFileUploadComponent = tslib_1.__decorate([
        Component({
            selector: 'app-client-file-upload',
            templateUrl: './client-file-upload.component.html',
            styleUrls: ['./client-file-upload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ClientFileUploadComponent);
    return ClientFileUploadComponent;
}());
export { ClientFileUploadComponent };
//# sourceMappingURL=client-file-upload.component.js.map
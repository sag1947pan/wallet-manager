var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
var URL = 'https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers';
var ClientFileUploadComponent = (function () {
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
    ClientFileUploadComponent = __decorate([
        Component({
            selector: 'app-client-file-upload',
            templateUrl: './client-file-upload.component.html',
            styleUrls: ['./client-file-upload.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ClientFileUploadComponent);
    return ClientFileUploadComponent;
}());
ClientFileUploadComponent = ClientFileUploadComponent;
//# sourceMappingURL=client-file-upload.component.js.map
import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers';

@Component({
  selector: 'app-client-file-upload',
  templateUrl: './client-file-upload.component.html',
  styleUrls: ['./client-file-upload.component.css']
})

export class ClientFileUploadComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    error: any;

    constructor() {
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            alert('File uploaded successfully');
        };


    }

    ngOnInit() {

  }
    public fileOverBase(e: any): void {
        debugger
        this.hasBaseDropZoneOver = e;
    }


    
    handleFileInput(files: FileList) {
        debugger
        var ext = (files.item(0).name).split('.')[1];
        if ((ext == 'xlsx') || (ext == 'xls') || (ext == 'csv') || (ext == 'xml') || (ext == 'json')) {

        } else {
            alert("File Format not Supported.");
            this.uploader.queue.splice(-1);
            return;
        }
    }

    
}

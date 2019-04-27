import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<DialogComponent>,
        private router: Router,) { }

  ngOnInit() {
  }

    OkClick() {

        this.dialogRef.close();
        this.router.navigate(['/Main']);


    }


}

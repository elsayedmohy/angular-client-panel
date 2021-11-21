import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar:MatSnackBar) { }

  openSnackBar(message , action) {
    this.snackBar.open(message, action,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:3000
    });
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snake:MatSnackBar) { }
  showSuccess(message: string, title: string) {
    this.openSnackBar(message)
  }

  showError(message: string, title: string) {
    this.openSnackBar(message)
  }

  showInfo(message: string, title: string) {
    this.openSnackBar(message)
  }

  showWarning(message: string, title: string) {
    this.openSnackBar(message)
  }
  openSnackBar(mes: any) {
    this.snake.open(mes, 'Ok',
      {
        verticalPosition:'bottom',
        horizontalPosition :'end',
        duration: 3000
      });
  
  }
}

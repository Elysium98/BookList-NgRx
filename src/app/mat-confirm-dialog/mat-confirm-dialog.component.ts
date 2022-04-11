import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss'],
})
export class MatConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  goToLogin(): void {
    this.router.navigateByUrl('login');
    this.dialogRef.close();
    this.userService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.loginService(this.formLogin.value).subscribe((res) => {
      if (res === true) {
        localStorage.setItem('user', JSON.stringify(this.authService.user));
        //console.log(this.authService.user.username);
        switch (this.authService.user.rol) {
          case 1:
            this.router.navigate(['/dashboardAdmin']);
            break;
          case 2:
            this.router.navigate(['/dashboardEmployes']);
            break;
          case 3:
            this.router.navigate(['']);
            break;
          default:
            break;
        }
      } else {
        Swal.fire({
          title: 'Error...',
          icon: 'error',
          text: res,
        });
      }
    });
  }
}

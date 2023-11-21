import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}


  onSubmit() { 
    if (this.username === 'admin' && this.password === 'admin') {
     
      alert('Nombre de usuario o contraseña correctos');
      this.router.navigate(['/clase']);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }


  }
  
}

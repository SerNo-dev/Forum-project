import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  nome: string = '';
  cognome: string = '';

  constructor(private auth : AuthService,private router : Router){}

  ngOnInit(): void {
    
  }

  register(){
    if(this.email == ''){
      alert('Please enter email')
      return;
    }
    if(this.password == ''){
      alert('Please enter password')
      return;
    }
    const fullName = this.nome + ' ' + this.cognome;
    this.auth.signUp(this.email, this.password,fullName).then(
      ()=>{
        console.log('User is Registered in');
    
        this.router.navigate(['/login'])
      }
    );
    this.email = ''
    this.password = ''
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  
  loginForm: FormGroup;
  
  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        //Validators.minLength(4),
        //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ]),
    });
  }
  
  loginSubmit(){
    if(this.email != null && this.password != null) {
      this.loginService.login(this.email, this.password).subscribe( data => {
        
        if( (data as any).logged ){
          this.router.navigate(['/']);
        } else {
          console.log((data as any).error)
          this.error = (data as any).error.error.error;
        }
      });
    } else {
      //this.error = "Les champs doivent être remplis"
    }
  }
  
  facebook(){
    console.log("facebook");
    this.loginService.facebook().subscribe( (result /*: MoviesResponse */) => {
      console.log("subscrieb " + result)
    })
  }
  
  twitter(){
    console.log("twitter")
  }
  
  google(){
    console.log("google")
  }
}

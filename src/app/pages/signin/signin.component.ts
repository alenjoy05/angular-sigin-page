import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private hero:HttpClient){}

  email:String = "";
  pass:String ="";

  data  = {
    email : this.email,
    pass : this.pass
  }

  signIN(){
    console.log(this.email,this.pass);
    }

}

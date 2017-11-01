import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUpPage {

    authForm: FormGroup;

    constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

        this.nav = nav;

        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            fullname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
            email: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')])],
            user: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    onSubmit(value: any): void {
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('fullname', value.fullname);
            window.localStorage.setItem('fullname', value.email);
            window.localStorage.setItem('password', value.password);

            this.nav.push(HomePage);
        }
    }
}

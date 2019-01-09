import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router) {

        this.valForm = fb.group({
            'email': [null, Validators.required],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        localStorage.setItem('token' , 'Sample Token');
        this.router.navigate(['/']);
        // for (let c in this.valForm.controls) {
        //     this.valForm.controls[c].markAsTouched();
        // }
        // if (this.valForm.valid) {
        //     console.log('Valid!');
        //     console.log(value);
        // }
    }

    ngOnInit() {

    }

}

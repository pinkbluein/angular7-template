import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    errorMessage = null;

    constructor(fb: FormBuilder, private router: Router, private loginService: LoginService, private dataService: DataService) {

        this.valForm = fb.group({
            'email': [null, Validators.required],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        this.router.navigate(['/']);
        // tslint:disable-next-line:forin
        for (const c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.errorMessage = null;
            this.loginService.login(value.email, value.password).subscribe(response => {
                localStorage.setItem('user', JSON.stringify(response['user']));
                localStorage.setItem('token', response['token']);
                this.router.navigate(['/']);
            }, error => {
                try {
                    console.log(error.json());
                    this.errorMessage = error.json().error[0];
                } catch (e) {
                    this.errorMessage = 'Network Problem';
                }
            });
        }
    }

    ngOnInit() {

    }

}

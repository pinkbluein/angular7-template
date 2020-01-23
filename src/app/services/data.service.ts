import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class DataService {
  public login: any;
  public user: any;
  public NETWORK_URL = environment.baseUrl;

  constructor() {
  }

  isLogin() {
    return this.getUser() != null && this.getToken() != null;
  }

  getUser() {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  }

  getNonJsonHeader() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
  }

  getToken() {
    return 'JWT ' + localStorage.getItem('token');
  }

  getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      })
    };
    return httpOptions;
  }
}

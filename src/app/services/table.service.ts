import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class TableService {

  constructor(private http: HttpClient) {

  }

  get_table_items() {
    return this.http.get('https://api.myjson.com/bins/1aiouo');
  }
}

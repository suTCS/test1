
import { Injectable } from '@angular/core';

import {User} from '../models/user.interface';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import {HttpClient} from '@angular/common/http';
import {merge} from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ProfileService {
  private baseUrl: string = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private user: User;

  constructor(private http: Http) { }

  //(res: Response) === res
  getUsers(): Observable<User[]>  {

        return this.http.get(this.baseUrl + '/users', this.options)
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
      }

      findByLastName(lname: string) {
        //const url = '/findbylastname/$';
       // return this.http.get(this.baseUrl +'/users/' + lname, this.options)
       return this.http.get(this.baseUrl + `/user/?lname=${lname}`) 
        .map((response: Response) => response.json())
          .catch(this.errorHandler);
      }

      getUser(id: Number) {

            return this.http.get(this.baseUrl + '/users/' + id, this.options).map((response: Response) => response.json())
            .catch(this.errorHandler);
          }

      deleteUser(id: Number) {

                    return this.http.delete(this.baseUrl + '/user/' + id, this.options).map((response: Response) => response.json())
                    .catch(this.errorHandler);
                  }

      createUser(user: User) {

                return this.http.post(this.baseUrl + '/user', JSON.stringify(user), this.options).map((response: Response) => response.json())
                        .catch(this.errorHandler);
      }

      updateUser(user: User) {

                return this.http.put(this.baseUrl + '/user', JSON.stringify(user), this.options).map((response: Response) => response.json())
                            .catch(this.errorHandler);
    }
 





  private errorHandler(err: Response) {
    //console.error(err);
    return Observable.throw(err || 'Some error on Server occured');
  }

  setter(user: User) {
    this.user = user;
  }

  getter() {
    return this.user;
}

}

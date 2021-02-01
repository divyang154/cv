import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChangePasswordService {

    private baseUrl = '/api/user';  

    constructor(private http: HttpClient) {
       
    }

    changePassword(password: string):Observable<any>{
        return this.http.get(`${this.baseUrl}`  + '/changePassword/'+  `${password}`);
    }

    addUser(username: string, password: string):Observable<any>{
        return this.http.get(`${this.baseUrl}`  + '/addUser/'+  `${username}`+'/'+  `${password}`);
    }

}    
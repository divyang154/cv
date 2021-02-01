import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private baseUrl = '/api/login/authenticate';  

    constructor(private http: HttpClient) {
       
    }

    login(username: string, password: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${username}/${password}`);
    }
}    